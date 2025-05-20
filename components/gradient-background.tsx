"use client"

import { useEffect, useState } from "react"

interface GradientBackgroundProps {
  errorType: number
}

export function GradientBackground({ errorType }: GradientBackgroundProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  // Get colors based on error type
  const getErrorColors = (code: number): [string, string, string] => {
    switch (code) {
      case 404:
        return ["#fee2e2", "#fecaca", "#fca5a5"] // red shades
      case 500:
        return ["#fef3c7", "#fde68a", "#fcd34d"] // amber shades
      case 403:
        return ["#ffedd5", "#fed7aa", "#fdba74"] // orange shades
      case 401:
        return ["#dbeafe", "#bfdbfe", "#93c5fd"] // blue shades
      case 503:
        return ["#ede9fe", "#ddd6fe", "#c4b5fd"] // purple shades
      default:
        return ["#f3f4f6", "#e5e7eb", "#d1d5db"] // gray shades
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update gradient position based on mouse movement (with dampening)
      setPosition((prev) => ({
        x: prev.x + (e.clientX / window.innerWidth - prev.x / 100) * 0.5,
        y: prev.y + (e.clientY / window.innerHeight - prev.y / 100) * 0.5,
      }))
    }

    // Subtle animation when no mouse movement
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x + Math.sin(Date.now() / 2000) * 2,
        y: prev.y + Math.cos(Date.now() / 2000) * 2,
      }))
    }, 50)

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const [color1, color2, color3] = getErrorColors(errorType)

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${color1} 0%, ${color2} 25%, ${color3} 50%, transparent 70%)`,
        opacity: 0.7,
        transition: "background 0.5s ease",
      }}
    />
  )
}
