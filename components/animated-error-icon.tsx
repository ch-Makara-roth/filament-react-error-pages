"use client"

import { useEffect, useState } from "react"
import { AlertCircle, Ban, ShieldAlert, AlertTriangle, Lock, FileQuestion } from "lucide-react"

interface AnimatedErrorIconProps {
  statusCode: number
}

export function AnimatedErrorIcon({ statusCode }: AnimatedErrorIconProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [bounce, setBounce] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimating(true)

    // Set up animation loop
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => setIsAnimating(true), 100)
    }, 5000)

    // Add bounce effect occasionally
    const bounceInterval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 500)
    }, 3000)

    // Add continuous subtle rotation
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(bounceInterval)
      clearInterval(rotationInterval)
    }
  }, [])

  // Define icon and animation based on status code
  const getErrorDetails = (code: number) => {
    switch (code) {
      case 404:
        return {
          icon: (
            <div className="relative">
              <FileQuestion
                className={`w-16 h-16 text-red-600 transition-all duration-500 ${
                  isAnimating ? "scale-110" : "scale-100"
                } ${bounce ? "animate-bounce" : ""}`}
                style={{ transform: `rotate(${Math.sin(rotation / 30) * 5}deg)` }}
              />
              <span
                className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 transition-all duration-300 ${
                  isAnimating ? "opacity-100" : "opacity-0"
                }`}
              >
                ?
              </span>
              <div
                className={`absolute -inset-4 rounded-full border-2 border-red-600 transition-all duration-700 ${
                  isAnimating ? "opacity-20 scale-110" : "opacity-0 scale-100"
                }`}
                style={{ transform: `rotate(${rotation / 2}deg)` }}
              ></div>
              <div
                className="absolute -inset-8 rounded-full border border-red-400/30 opacity-70"
                style={{ transform: `rotate(${-rotation / 4}deg)` }}
              ></div>
            </div>
          ),
          bgColor: "bg-red-100",
        }
      case 500:
        return {
          icon: (
            <div className="relative">
              <AlertTriangle
                className={`w-16 h-16 text-amber-600 transition-all duration-500 ${
                  isAnimating ? "rotate-12" : "rotate-0"
                } ${bounce ? "animate-bounce" : ""}`}
                style={{ transform: `rotate(${Math.sin(rotation / 40) * 10}deg)` }}
              />
              <span
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg transition-all duration-300 ${
                  isAnimating ? "opacity-100" : "opacity-0"
                }`}
              >
                !
              </span>
              <div
                className={`absolute inset-0 rounded-full border-2 border-amber-600 transition-all duration-700 ${
                  isAnimating ? "opacity-20 scale-150 rotate-45" : "opacity-0 scale-100 rotate-0"
                }`}
                style={{ transform: `rotate(${rotation / 2}deg)` }}
              ></div>
              <div
                className="absolute -inset-8 rounded-full border border-amber-400/30 opacity-70"
                style={{ transform: `rotate(${-rotation / 3}deg)` }}
              ></div>
            </div>
          ),
          bgColor: "bg-amber-100",
        }
      case 403:
        return {
          icon: (
            <div className="relative">
              <Ban
                className={`w-16 h-16 text-orange-600 transition-all duration-500 ${
                  isAnimating ? "rotate-180" : "rotate-0"
                } ${bounce ? "animate-bounce" : ""}`}
                style={{ transform: `rotate(${rotation}deg)` }}
              />
              <div
                className={`absolute inset-0 rounded-full border-2 border-orange-600 transition-all duration-700 ${
                  isAnimating ? "opacity-20 scale-150" : "opacity-0 scale-100"
                }`}
                style={{ transform: `rotate(${-rotation / 2}deg)` }}
              ></div>
              <div
                className="absolute -inset-8 rounded-full border border-orange-400/30 opacity-70"
                style={{ transform: `rotate(${rotation / 4}deg)` }}
              ></div>
            </div>
          ),
          bgColor: "bg-orange-100",
        }
      case 401:
        return {
          icon: (
            <div className="relative">
              <Lock
                className={`w-16 h-16 text-blue-600 transition-all duration-700 ${
                  isAnimating ? "scale-y-110" : "scale-y-100"
                } ${bounce ? "animate-bounce" : ""}`}
                style={{ transform: `rotate(${Math.sin(rotation / 50) * 5}deg)` }}
              />
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-3 w-3 rounded-full bg-blue-600 transition-all duration-500 ${
                  isAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                }`}
              ></div>
              <div
                className={`absolute inset-0 rounded-full border-2 border-blue-600 transition-all duration-700 ${
                  isAnimating ? "opacity-20 scale-150" : "opacity-0 scale-100"
                }`}
                style={{ transform: `rotate(${rotation / 3}deg)` }}
              ></div>
              <div
                className="absolute -inset-8 rounded-full border border-blue-400/30 opacity-70"
                style={{ transform: `rotate(${-rotation / 5}deg)` }}
              ></div>
            </div>
          ),
          bgColor: "bg-blue-100",
        }
      case 503:
        return {
          icon: (
            <div className="relative">
              <ShieldAlert
                className={`w-16 h-16 text-purple-600 transition-all duration-500 ${
                  isAnimating ? "scale-105 rotate-6" : "scale-100 rotate-0"
                } ${bounce ? "animate-bounce" : ""}`}
                style={{ transform: `rotate(${Math.sin(rotation / 40) * 6}deg)` }}
              />
              <div
                className={`absolute inset-0 rounded-full border-4 border-purple-600 transition-all duration-700 ${
                  isAnimating ? "opacity-20 scale-150" : "opacity-0 scale-100"
                }`}
                style={{ transform: `rotate(${rotation / 4}deg)` }}
              ></div>
              <div
                className="absolute -inset-8 rounded-full border border-purple-400/30 opacity-70"
                style={{ transform: `rotate(${-rotation / 6}deg)` }}
              ></div>
            </div>
          ),
          bgColor: "bg-purple-100",
        }
      default:
        return {
          icon: (
            <div className="relative">
              <AlertCircle
                className={`w-16 h-16 text-gray-600 transition-all duration-500 ${
                  isAnimating ? "scale-110" : "scale-100"
                } ${bounce ? "animate-bounce" : ""}`}
                style={{ transform: `rotate(${Math.sin(rotation / 45) * 5}deg)` }}
              />
              <div
                className={`absolute inset-0 rounded-full border-4 border-gray-600 transition-all duration-700 ${
                  isAnimating ? "opacity-20 scale-150" : "opacity-0 scale-100"
                }`}
                style={{ transform: `rotate(${rotation / 3}deg)` }}
              ></div>
              <div
                className="absolute -inset-8 rounded-full border border-gray-400/30 opacity-70"
                style={{ transform: `rotate(${-rotation / 4}deg)` }}
              ></div>
            </div>
          ),
          bgColor: "bg-gray-100",
        }
    }
  }

  const { icon, bgColor } = getErrorDetails(statusCode)

  return (
    <div
      className={`flex items-center justify-center w-32 h-32 mb-6 rounded-full ${bgColor} transition-all duration-500 shadow-lg`}
    >
      {icon}
    </div>
  )
}
