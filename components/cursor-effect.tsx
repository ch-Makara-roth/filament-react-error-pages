"use client"

import { useEffect, useState } from "react"

interface CursorPosition {
  x: number
  y: number
}

interface CursorEffectProps {
  errorType: number
}

export function CursorEffect({ errorType }: CursorEffectProps) {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Get color based on error type
  const getErrorColor = (code: number): string => {
    switch (code) {
      case 404:
        return "rgba(239, 68, 68, 0.5)" // red
      case 500:
        return "rgba(245, 158, 11, 0.5)" // amber
      case 403:
        return "rgba(249, 115, 22, 0.5)" // orange
      case 401:
        return "rgba(59, 130, 246, 0.5)" // blue
      case 503:
        return "rgba(139, 92, 246, 0.5)" // purple
      default:
        return "rgba(107, 114, 128, 0.5)" // gray
    }
  }

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "30px",
        height: "30px",
        backgroundColor: getErrorColor(errorType),
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 0.6,
        boxShadow: `0 0 20px ${getErrorColor(errorType)}`,
      }}
    />
  )
}
