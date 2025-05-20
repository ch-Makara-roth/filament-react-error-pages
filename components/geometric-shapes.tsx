"use client"

import { useEffect, useState } from "react"

interface Shape {
  type: "circle" | "square" | "triangle"
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  opacity: number
  color: string
}

interface GeometricShapesProps {
  errorType: number
  count?: number
}

export function GeometricShapes({ errorType, count = 15 }: GeometricShapesProps) {
  const [shapes, setShapes] = useState<Shape[]>([])

  // Get color based on error type
  const getErrorColor = (code: number): string => {
    switch (code) {
      case 404:
        return "#ef4444" // red
      case 500:
        return "#f59e0b" // amber
      case 403:
        return "#f97316" // orange
      case 401:
        return "#3b82f6" // blue
      case 503:
        return "#8b5cf6" // purple
      default:
        return "#6b7280" // gray
    }
  }

  useEffect(() => {
    const color = getErrorColor(errorType)
    const shapeTypes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"]

    // Create random shapes
    const newShapes: Shape[] = Array.from({ length: count }).map(() => ({
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      speed: Math.random() * 20 + 10,
      opacity: Math.random() * 0.15 + 0.05,
      color,
    }))

    setShapes(newShapes)
  }, [errorType, count])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            animation: `float ${shape.speed}s infinite ease-in-out`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                backgroundColor: shape.color,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                backgroundColor: shape.color,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}`,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
