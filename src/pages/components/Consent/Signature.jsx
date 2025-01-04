import { useRef, useState, useEffect } from "react";

function Signature({ value, onChange }) {
  const canvasRef = useRef(null);
  const [writingMode, setWritingMode] = useState(false);

  const handlePointerDown = (event) => {
    setWritingMode(true);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    const [positionX, positionY] = getCursorPosition(event);
    ctx.moveTo(positionX, positionY);
  };

  const handlePointerUp = () => {
    setWritingMode(false);
    saveSignature();
  };

  const handlePointerMove = (event) => {
    if (!writingMode) return;
    const ctx = canvasRef.current.getContext("2d");
    const [positionX, positionY] = getCursorPosition(event);
    ctx.lineWidth = 2;
    ctx.lineJoin = ctx.lineCap = "round";
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
  };

  const getCursorPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const positionX = event.clientX - rect.x;
    const positionY = event.clientY - rect.y;
    return [positionX, positionY];
  };

  const preventScroll = (event) => {
    event.preventDefault();
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    const signatureData = canvas.toDataURL();
    onChange({
      target: { name: "signatureImage", value: signatureData },
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = () => {
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    const touchStartHandle = (event) => {
      preventScroll(event);
      handlePointerDown(event);
    };

    const touchMoveHandle = (event) => {
      preventScroll(event);
      handlePointerMove(event);
    };

    const touchEndHandle = () => {
      handlePointerUp();
    };

    canvas.addEventListener("touchstart", touchStartHandle, { passive: false });
    canvas.addEventListener("touchmove", touchMoveHandle, { passive: false });
    canvas.addEventListener("touchend", touchEndHandle);

    return () => {
      canvas.removeEventListener("touchstart", touchStartHandle);
      canvas.removeEventListener("touchmove", touchMoveHandle);
      canvas.removeEventListener("touchend", touchEndHandle);
    };
  }, []);

  return (
    <>
      <div className="consent-label">Signature:</div>
      <div className="consent-inputs">
        <div className="signature-div">
          <canvas
            ref={canvasRef}
            className="signature-pad"
            onPointerDown={(event) => {
              handlePointerDown(event);
              preventScroll(event);
            }}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onMouseLeave={handlePointerUp}
          ></canvas>
        </div>
      </div>
      <div className="clear-button-div">
        <p>
          <a onClick={clearCanvas} className="clear-button">
            Clear
          </a>
        </p>
      </div>
    </>
  );
}

export default Signature;
