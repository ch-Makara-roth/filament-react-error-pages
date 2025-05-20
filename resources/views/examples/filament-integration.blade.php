{{-- Example of how to use the package with Filament --}}
<x-filament::layouts.base :title="__('Not Found')">
    {{-- This will render our React error page inside Filament's layout --}}
    <div class="filament-error-container">
        {!! app('filament-react-error-pages')->render(404, [
            'message' => __('The page you are looking for could not be found.'),
            'showHomeButton' => true,
            'homeButtonText' => __('Return to Dashboard'),
            'homeUrl' => route('filament.admin.dashboard'),
        ]) !!}
    </div>

    {{-- Optionally add some Filament-specific styling --}}
    <style>
        .filament-error-container {
            display: flex;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
        }
    </style>
</x-filament::layouts.base>
