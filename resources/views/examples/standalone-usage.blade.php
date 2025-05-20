{{-- Example of how to use the package in a standalone Laravel application --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $errorCode ?? '404' }} | {{ config('app.name', 'Laravel') }}</title>

    {{-- Include any application-specific styles if needed --}}
    @vite(['resources/css/app.css'])
</head>
<body>
    {{-- Render the React error page --}}
    {!! app('filament-react-error-pages')->render($errorCode ?? 404, [
        'message' => $message ?? __('The page you were looking for could not be found.'),
        'companyName' => config('app.name'),
        'supportEmail' => 'support@example.com',
        'logo' => asset('images/logo.png'),
    ]) !!}

    {{-- If you have any application-specific scripts, include them here --}}
    @vite(['resources/js/app.js'])
</body>
</html>
