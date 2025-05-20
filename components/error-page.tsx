"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedErrorIcon } from "@/components/animated-error-icon"
import { AnimatedBackground } from "@/components/animated-background"
import { GeometricShapes } from "@/components/geometric-shapes"
import { GradientBackground } from "@/components/gradient-background"

interface ErrorAction {
  label: string
  onClick?: () => void
  href?: string
}

interface ErrorPageProps {
  statusCode: number
  title: string
  description: string
  action?: ErrorAction
  isGlobal?: boolean
}

export function ErrorPage({ statusCode, title, description, action, isGlobal = false }: ErrorPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const content = (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      {/* Animated backgrounds - layered for depth */}
      <GradientBackground errorType={statusCode} />
      <GeometricShapes errorType={statusCode} />
      <AnimatedBackground errorType={statusCode} />

      {/* Main content with animations */}
      <div
        className={`transform transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } relative z-10`}
      >
        <AnimatedErrorIcon statusCode={statusCode} />
      </div>

      <h1
        className={`mb-2 text-4xl font-bold tracking-tight transform transition-all duration-700 delay-200 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } relative z-10`}
      >
        {title}
      </h1>

      <div
        className={`mb-2 text-sm text-muted-foreground transform transition-all duration-700 delay-300 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } relative z-10`}
      >
        Error {statusCode}
      </div>

      <p
        className={`mb-8 text-lg text-muted-foreground transform transition-all duration-700 delay-400 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } relative z-10`}
      >
        {description}
      </p>

      <div
        className={`transform transition-all duration-700 delay-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
        } relative z-10`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {action ? (
          action.href ? (
            <Button asChild className="relative overflow-hidden group">
              <Link href={action.href}>
                <span className="relative z-10">{action.label}</span>
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </Button>
          ) : (
            <Button onClick={action.onClick} className="relative overflow-hidden group">
              <span className="relative z-10">{action.label}</span>
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            </Button>
          )
        ) : (
          <Button asChild className="relative overflow-hidden group">
            <Link href="/">
              <span className="relative z-10">Return to home</span>
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </Button>
        )}
      </div>

      {/* Pulse effect around button when hovering */}
      <div
        className={`absolute w-32 h-32 rounded-full transition-all duration-700 ${
          isHovering ? "opacity-20 scale-100" : "opacity-0 scale-50"
        } z-10`}
        style={{
          backgroundColor: `var(--${getErrorColor(statusCode)})`,
          animation: isHovering ? "pulse 2s infinite" : "none",
        }}
      />
    </div>
  )

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
        
        :root {
          --red: #ef4444;
          --amber: #f59e0b;
          --orange: #f97316;
          --blue: #3b82f6;
          --purple: #8b5cf6;
          --gray: #6b7280;
        }
      `}</style>
      {content}
    </>
  )
}

// Helper function to get color variable name based on error code
function getErrorColor(code: number): string {
  switch (code) {
    case 404:
      return "red"
    case 500:
      return "amber"
    case 403:
      return "orange"
    case 401:
      return "blue"
    case 503:
      return "purple"
    default:
      return "gray"
  }
}
