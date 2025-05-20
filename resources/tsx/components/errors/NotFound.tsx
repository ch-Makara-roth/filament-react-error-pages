import React from 'react';
import ErrorLayout, { ErrorLayoutProps } from '../ErrorLayout';

export interface NotFoundProps extends Partial<ErrorLayoutProps> {
  message?: string;
  customImage?: string;
  suggestions?: string[];
}

const NotFound: React.FC<NotFoundProps> = ({
  message = "The page you're looking for doesn't exist or has been moved.",
  customImage,
  suggestions = [
    "Check that you typed the address correctly",
    "Go back to the previous page",
    "Visit our homepage"
  ],
  ...errorLayoutProps
}) => {
  // Default illustration for 404 error
  const defaultIllustration = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAxOTVjNTIuNDY3IDAgOTUtNDIuNTMzIDk1LTk1UzE1Mi40NjcgNSAxMDAgNSA1IDQ3LjUzMyA1IDEwMHM0Mi41MzMgOTUgOTUgOTV6IiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMTAwIDEwMHYzNU0xMjAgODBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBzLTIwIDguOTU0LTIwIDIwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==';

  return (
    <ErrorLayout
      title="Page Not Found"
      subtitle={message}
      errorCode={404}
      illustration={customImage || defaultIllustration}
      {...errorLayoutProps}
    >
      {suggestions && suggestions.length > 0 && (
        <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '28rem' }}>
          <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>Try the following:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {suggestions.map((suggestion, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </ErrorLayout>
  );
};

export default NotFound;

