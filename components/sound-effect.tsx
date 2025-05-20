"use client"

import { useEffect, useRef, useState } from "react"

interface SoundEffectProps {
  errorType: number
  volume?: number
}

export function SoundEffect({ errorType, volume = 0.3 }: SoundEffectProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)

  // Get sound URL based on error type
  const getSoundUrl = (code: number): string => {
    switch (code) {
      case 404:
        return "/sounds/404.mp3"
      case 500:
        return "/sounds/500.mp3"
      case 403:
        return "/sounds/403.mp3"
      case 401:
        return "/sounds/401.mp3"
      case 503:
        return "/sounds/503.mp3"
      default:
        return "/sounds/error.mp3"
    }
  }

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio()
    audioRef.current.volume = volume

    // Use a generic error sound since we don't have actual sound files
    audioRef.current.src = "/sounds/error.mp3"

    // Mark as loaded when it's ready
    audioRef.current.oncanplaythrough = () => {
      setAudioLoaded(true)
    }

    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [volume])

  // Play sound when enabled and loaded
  useEffect(() => {
    if (audioEnabled && audioLoaded && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Audio playback prevented:", err)
      })
    }
  }, [audioEnabled, audioLoaded])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm"
        aria-label={audioEnabled ? "Mute sound effects" : "Enable sound effects"}
      >
        {audioEnabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </div>
  )
}
