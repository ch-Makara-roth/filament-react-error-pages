import React from 'react';
import ErrorLayout, { ErrorLayoutProps } from '../ErrorLayout';

export interface GenericErrorProps extends Partial<ErrorLayoutProps> {
  message?: string;
  customImage?: string;
}

const GenericError: React.FC<GenericErrorProps> = ({
  message = "An error occurred.",
  customImage,
  ...errorLayoutProps
}) => {
  // Default title based on error code if not provided
  const errorTitle = errorLayoutProps.title || (
    errorLayoutProps.errorCode ? `Error ${errorLayoutProps.errorCode}` : "Error"
  );

  return (
    <ErrorLayout
      title={errorTitle}
      subtitle={message}
      errorCode={errorLayoutProps.errorCode || 0}
      {...errorLayoutProps}
    >
      <div>
        <p>
          Please try again later or contact support if the problem persists.
        </p>
      </div>
    </ErrorLayout>
  );
};

export default GenericError;

