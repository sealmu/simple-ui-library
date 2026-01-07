import React from "react";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  text: string;
  color?: string;
  size?: ButtonSize;
  onClick?: () => void;
}

export const sizeMap: Record<ButtonSize, string> = {
  small: "8px 12px",
  medium: "12px 20px",
  large: "16px 24px",
};

export const Button: React.FC<ButtonProps> = ({
  text,
  color = "#007bff",
  size = "medium",
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        padding: sizeMap[size],
        border: "none",
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
