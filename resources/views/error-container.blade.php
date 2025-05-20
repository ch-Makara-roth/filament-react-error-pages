<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $errorCode }} | {{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('vendor/filament-react-error-pages/css/app.css') }}">
    
    <style>
        /* Basic fallback styles in case CSS doesn't load */
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
            color: #1f2937;
            line-height: 1.5;
        }
        #{{ $reactAppId }} {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .error-fallback {
            text-align: center;
            padding: 2rem;
            max-width: 32rem;
            margin: 0 auto;
        }
        .error-status {
            font-size: 5rem;
            font-weight: 700;
            margin: 0;
            line-height: 1;
            color: #3b82f6;
        }
        .error-message {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 1rem 0 2rem;
        }
        .error-actions {
            margin-top: 2rem;
        }
        .error-button {
            background-color: #3b82f6;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 0 0.5rem;
        }
        .error-button:hover {
            background-color: #2563eb;
        }
    </style>
    
    <!-- Custom styles from configuration -->
    @if (config('filament-react-error-pages.styles.custom_css'))
        <style>
            {!! config('filament-react-error-pages.styles.custom_css') !!}
        </style>
    @endif
</head>
<body>
    <div id="{{ $reactAppId }}" data-props="{{ $props }}" data-component="{{ $componentName }}">
        <!-- Fallback content in case JavaScript is disabled -->
        <div class="error-fallback">
            <h1 class="error-status">{{ $errorCode }}</h1>
            <p class="error-message">{{ $errorMessage ?? \MakaraRoth\FilamentReactErrorPages\Http\Middleware\HandleErrorsWithReact::getErrorMessage($errorCode) }}</p>
            <div class="error-actions">
                @if(config('filament-react-error-pages.global_props.show_back_button', true))
                    <a href="javascript:history.back()" class="error-button">
                        {{ config('filament-react-error-pages.global_props.back_button_text', 'Go Back') }}
                    </a>
                @endif
                
                @if(config('filament-react-error-pages.global_props.show_home_button', true))
                    <a href="{{ config('filament-react-error-pages.global_props.home_url', '/') }}" class="error-button">
                        {{ config('filament-react-error-pages.global_props.home_button_text', 'Go to Homepage') }}
                    </a>
                @endif
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        window.filamentReactErrorPages = {
            config: @json(config('filament-react-error-pages')),
            errorCode: {{ $errorCode }},
            componentName: "{{ $componentName }}",
            props: JSON.parse('{!! $props !!}')
        };
    </script>
    <script src="{{ asset('vendor/filament-react-error-pages/js/app.js') }}" defer></script>
</body>
</html>

