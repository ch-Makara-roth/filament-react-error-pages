// Export error components
export { default as NotFound } from './components/errors/NotFound';
export { default as ServerError } from './components/errors/ServerError';
export { default as GenericError } from './components/errors/GenericError';

// We'll add these later as they're implemented
// export { default as Forbidden } from './components/errors/Forbidden';
// export { default as Unauthorized } from './components/errors/Unauthorized';
// export { default as BadRequest } from './components/errors/BadRequest';
// export { default as PageExpired } from './components/errors/PageExpired';
// export { default as TooManyRequests } from './components/errors/TooManyRequests';
// export { default as ServiceUnavailable } from './components/errors/ServiceUnavailable';

// Export layout components
export { default as ErrorLayout } from './components/ErrorLayout';

// Main initialization function
import { initErrorPages } from './initialize.tsx';
export { initErrorPages };

// Auto-initialize in browser environments
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initErrorPages);
  } else {
    initErrorPages();
  }
}