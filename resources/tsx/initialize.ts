import React from 'react';
import ReactDOM from 'react-dom/client';
import * as ErrorComponents from './index';

/**
 * Initialize React error pages
 * This function is called automatically when the script is loaded
 */
export const initErrorPages = (): void => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }

  // Get the error page container
  const container = document.getElementById('filament-react-error-app');
  if (!container) {
    console.error('Error page container not found');
    return;
  }

  // Get the configuration from the window object
  const settings = (window as any).filamentReactErrorPages;
  if (!settings) {
    console.error('Error page configuration not found');
    return;
  }

  // Get the component to render
  const componentName = settings.componentName;
  const Component = ErrorComponents[componentName as keyof typeof ErrorComponents];
  
  if (!Component) {
    console.error(`Error component "${componentName}" not found, using GenericError instead`);
    // Fallback to generic error component
    const GenericError = ErrorComponents.GenericError;
    if (!GenericError) {
      console.error('GenericError component not found');
      return;
    }
    
    // Create root and render generic error
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <GenericError 
          errorCode={settings.errorCode} 
          {...settings.props} 
        />
      </React.StrictMode>
    );
    return;
  }
  
  // Create root and render the appropriate error component
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Component 
        errorCode={settings.errorCode} 
        {...settings.props} 
      />
    </React.StrictMode>
  );
};

// Auto-initialize if in browser environment
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initErrorPages);
  } else {
    initErrorPages();
  }
}
