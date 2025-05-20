import React from 'react';
import ErrorLayout, { ErrorLayoutProps } from '../ErrorLayout';

export interface ServerErrorProps extends Partial<ErrorLayoutProps> {
  message?: string;
  customImage?: string;
  contactInfo?: string;
  isRetryable?: boolean;
  onRetry?: () => void;
}

const ServerError: React.FC<ServerErrorProps> = ({
  message = "We're sorry, but something went wrong on our server.",
  customImage,
  contactInfo = "If this problem persists, please contact our support team.",
  isRetryable = true,
  onRetry,
  ...errorLayoutProps
}) => {
  // Default illustration for 500 error
  const defaultIllustration = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAxOTVjNTIuNDY3IDAgOTUtNDIuNTMzIDk1LTk1UzE1Mi40NjcgNSAxMDAgNSA1IDQ3LjUzMyA1IDEwMHM0Mi41MzMgOTUgOTUgOTV6IiBzdHJva2U9IiNFRjQ0NDQiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMTAwIDEyMHYyTTEwMCA2MHY0MCIgc3Ryb2tlPSIjRUY0NDQ0IiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=';

  // Handle retry button click
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <ErrorLayout
      title="Server Error"
      subtitle={message}
      errorCode={500}
      illustration={customImage || defaultIllustration}
      primaryColor="#ef4444" // Red color for server errors
      {...errorLayoutProps}
    >
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ marginBottom: '1rem' }}>{contactInfo}</p>
        
        {isRetryable && (
          <button
            onClick={handleRetry}
            style={{
              backgroundColor: '#ef4444',
              border: 'none',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginTop: '1rem',
            }}
          >
            Try again
          </button>
        )}
      </div>
    </ErrorLayout>
  );
};

export default ServerError;
