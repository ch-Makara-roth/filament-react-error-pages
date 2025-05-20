"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  errorType: number
}

export function AnimatedBackground({ errorType }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

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
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth
      canvas.height = innerHeight
    }

    // Initialize canvas size
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create wave patterns
    const waves = []
    const baseColor = getErrorColor(errorType)
    const waveCount = 3

    for (let i = 0; i < waveCount; i++) {
      waves.push({
        color: baseColor,
        amplitude: 25 + i * 15, // Height of the wave
        frequency: 0.01 + i * 0.005, // How many waves
        speed: 0.02 + i * 0.01, // How fast the wave moves
        offset: Math.random() * 100, // Starting position
        opacity: 0.03 + i * 0.01, // Transparency
      })
    }

    // Animation loop
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.05

      // Draw each wave
      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        // Draw wave path
        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin(x * wave.frequency + time + wave.offset) * wave.amplitude +
            canvas.height / 2 +
            Math.sin(time * wave.speed * 2) * 20

          ctx.lineTo(x, y)
        }

        // Complete the wave path
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        // Fill with gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(
          0,
          `${wave.color}${Math.floor(wave.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(
          0.5,
          `${wave.color}${Math.floor(wave.opacity * 2 * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(
          1,
          `${wave.color}${Math.floor(wave.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )

        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [errorType])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
