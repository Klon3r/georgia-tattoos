import { useRef, useState } from "react";

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

  return (
    <>
      <div className="consent-label">Signature:</div>
      <div className="consent-inputs">
        <div className="signature-div">
          <canvas
            ref={canvasRef}
            height="100"
            width="300"
            className="signature-pad"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default Signature;
