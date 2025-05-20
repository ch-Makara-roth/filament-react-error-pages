<?php

namespace MakaraRoth\FilamentReactErrorPages\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use MakaraRoth\FilamentReactErrorPages\FilamentReactErrorPages;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class HandleErrorsWithReact
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Process the request first
        $response = $next($request);

        // Check if error pages are enabled
        if (!config('filament-react-error-pages.use_custom_error_pages', true)) {
            return $response;
        }

        // Only process responses with error status codes
        if (!$this->isErrorResponse($response)) {
            return $response;
        }

        // Get the status code
        $statusCode = $response->getStatusCode();

        // Get the FilamentReactErrorPages instance
        $errorPages = App::make('filament-react-error-pages');

        // Check if we have a custom error page for this status code
        if (!$errorPages->hasCustomErrorPage($statusCode)) {
            return $response;
        }

        // Get additional data from the response
        $data = [];
        if ($response instanceof Response) {
            $data = $response->getOriginalContent() instanceof \Illuminate\View\View
                ? $response->getOriginalContent()->getData()
                : [];
        }

        // Gather information about the error
        $errorData = [
            'status' => $statusCode,
            'message' => $this->getErrorMessage($statusCode),
            'exception' => $data['exception'] ?? null,
        ];

        // Render the React error page
        $content = $errorPages->render($statusCode, $errorData);

        // Create a new response with the React error page
        $newResponse = new Response($content, $statusCode);

        return $newResponse;
    }

    /**
     * Determine if the response has an error status code.
     *
     * @param  \Symfony\Component\HttpFoundation\Response  $response
     * @return bool
     */
    protected function isErrorResponse($response)
    {
        if (!$response instanceof SymfonyResponse) {
            return false;
        }

        $statusCode = $response->getStatusCode();

        return $statusCode >= 400 && $statusCode < 600;
    }

    /**
     * Get a default error message for a status code.
     *
     * @param  int  $statusCode
     * @return string
     */
    protected function getErrorMessage(int $statusCode): string
    {
        $messages = [
            400 => 'Bad Request',
            401 => 'Unauthorized',
            403 => 'Forbidden',
            404 => 'Not Found',
            419 => 'Page Expired',
            429 => 'Too Many Requests',
            500 => 'Server Error',
            503 => 'Service Unavailable',
        ];

        return $messages[$statusCode] ?? 'An error occurred';
    }
}

