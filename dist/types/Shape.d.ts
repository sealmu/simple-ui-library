import React from "react";
export type ShapeType = "circle" | "triangle" | "star";
export interface ShapeProps {
    type: ShapeType;
    color?: string;
    size?: number;
}
declare const Shape: React.FC<ShapeProps>;
export default Shape;
