import { notFound } from "next/navigation"
import { ErrorPage } from "@/components/error-page"

// Define valid error codes
const validErrorCodes = ["400", "401", "403", "500", "503"]

export default function CustomErrorPage({ params }: { params: { errorCode: string } }) {
  const { errorCode } = params

  // If not a valid error code, show 404
  if (!validErrorCodes.includes(errorCode)) {
    notFound()
  }

  // Map error codes to their descriptions
  const errorDetails: Record<string, { title: string; description: string }> = {
    "400": {
      title: "Bad Request",
      description: "The server cannot process the request due to a client error.",
    },
    "401": {
      title: "Unauthorized",
      description: "You need to be authenticated to access this resource.",
    },
    "403": {
      title: "Forbidden",
      description: "You don't have permission to access this resource.",
    },
    "500": {
      title: "Internal Server Error",
      description: "Something went wrong on our servers. We're working to fix the issue.",
    },
    "503": {
      title: "Service Unavailable",
      description: "The service is temporarily unavailable. Please try again later.",
    },
  }

  const { title, description } = errorDetails[errorCode]

  return <ErrorPage statusCode={Number.parseInt(errorCode)} title={title} description={description} />
}

// Generate static params for valid error codes
export function generateStaticParams() {
  return validErrorCodes.map((errorCode) => ({
    errorCode,
  }))
}
