import React from "react";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps {
    text: string;
    color?: string;
    size?: ButtonSize;
    onClick?: () => void;
}
export declare const sizeMap: Record<ButtonSize, string>;
export declare const Button: React.FC<ButtonProps>;
export default Button;
