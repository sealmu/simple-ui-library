import React from "react";

export type ShapeType = "circle" | "triangle" | "star";

export interface ShapeProps {
  type: ShapeType;
  color?: string;
  size?: number; // in pixels
}

const Shape: React.FC<ShapeProps> = ({ type, color = "red", size = 50 }) => {
  const styles = { fill: color, width: size, height: size };

  switch (type) {
    case "circle":
      return (
        <svg {...styles}>
          <circle cx={size / 2} cy={size / 2} r={size / 2} />
        </svg>
      );
    case "triangle":
      return (
        <svg {...styles} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={`${size / 2},0 0,${size} ${size},${size}`} />
        </svg>
      );
    case "star":
      const points = [
        [0.5, 0],
        [0.618, 0.382],
        [1, 0.382],
        [0.691, 0.618],
        [0.809, 1],
        [0.5, 0.764],
        [0.191, 1],
        [0.309, 0.618],
        [0, 0.382],
        [0.382, 0.382],
      ]
        .map(([x, y]) => `${x * size},${y * size}`)
        .join(" ");
      return (
        <svg {...styles} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={points} />
        </svg>
      );
    default:
      return null;
  }
};

export default Shape;
