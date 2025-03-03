import React from "react";

export function Card({ children }) {
  return <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
