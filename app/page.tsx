import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-10 mx-auto">
      <h1 className="mb-2 text-4xl font-bold text-center">Error Pages Demo</h1>
      <p className="mb-8 text-center text-muted-foreground">With animated backgrounds and visual effects</p>

      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ErrorCard code={404} title="Not Found" description="Page not found error" path="/non-existent-page" />

        <ErrorCard code={500} title="Server Error" description="Internal server error" path="/500" />

        <ErrorCard code={403} title="Forbidden" description="Access denied error" path="/403" />

        <ErrorCard code={401} title="Unauthorized" description="Authentication required" path="/401" />

        <ErrorCard code={400} title="Bad Request" description="Invalid request error" path="/400" />

        <ErrorCard code={503} title="Service Unavailable" description="Temporary downtime" path="/503" />
      </div>

      <div className="mt-12 text-center max-w-lg">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="text-muted-foreground text-sm space-y-2">
          <li>🌊 Animated wave background unique to each error type</li>
          <li>🎨 Interactive gradient background that follows mouse movement</li>
          <li>🔷 Floating geometric shapes with subtle animations</li>
          <li>✨ Enhanced icon animations with continuous motion</li>
          <li>🔄 Multiple layered animations for depth and visual interest</li>
        </ul>
      </div>
    </div>
  )
}

function ErrorCard({
  code,
  title,
  description,
  path,
}: {
  code: number
  title: string
  description: string
  path: string
}) {
  return (
    <Card className="overflow-hidden group relative">
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: getGradientByCode(code),
        }}
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span
            className="px-2 py-1 text-xs font-bold text-white rounded group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundColor: getColorByCode(code),
            }}
          >
            {code}
          </span>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" asChild className="w-full relative overflow-hidden group">
          <Link href={path}>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              View {code} Page{" "}
              <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span
              className="absolute inset-0 w-0 transition-all duration-300 group-hover:w-full"
              style={{
                backgroundColor: `${getColorByCode(code)}20`,
              }}
            ></span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

// Helper functions for card styling
function getColorByCode(code: number): string {
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

function getGradientByCode(code: number): string {
  switch (code) {
    case 404:
      return "linear-gradient(to bottom right, #ef4444, #b91c1c)"
    case 500:
      return "linear-gradient(to bottom right, #f59e0b, #d97706)"
    case 403:
      return "linear-gradient(to bottom right, #f97316, #ea580c)"
    case 401:
      return "linear-gradient(to bottom right, #3b82f6, #2563eb)"
    case 503:
      return "linear-gradient(to bottom right, #8b5cf6, #7c3aed)"
    default:
      return "linear-gradient(to bottom right, #6b7280, #4b5563)"
  }
}
