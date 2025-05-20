"use client"

import { useEffect } from "react"
import { ErrorPage } from "@/components/error-page"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <ErrorPage
      statusCode={500}
      title="Something went wrong!"
      description="An error occurred while processing your request."
      action={{
        label: "Try again",
        onClick: () => reset(),
      }}
    />
  )
}
