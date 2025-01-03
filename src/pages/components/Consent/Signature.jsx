import { useRef, useState, useEffect } from "react";

function Signature() {
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
            height="100"
            width="350"
            className="signature-pad"
            onPointerDown={(event) => {
              handlePointerDown(event);
              preventScroll(event);
            }}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onMouseLeave={handlePointerUp}
          ></canvas>
          <p>
            <a onClick={clearCanvas}>Clear</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signature;
