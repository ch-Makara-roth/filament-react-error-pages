"use client"

import { ErrorPage } from "@/components/error-page"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <ErrorPage
          statusCode={500}
          title="Application Error"
          description="A critical error occurred in the application."
          action={{
            label: "Reload application",
            onClick: () => reset(),
          }}
          isGlobal
        />
      </body>
    </html>
  )
}
