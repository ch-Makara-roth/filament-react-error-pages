import { default as React } from 'react';
import { ErrorLayoutProps } from '../ErrorLayout';

export interface ServerErrorProps extends Partial<ErrorLayoutProps> {
    message?: string;
    customImage?: string;
    contactInfo?: string;
    isRetryable?: boolean;
    onRetry?: () => void;
}
declare const ServerError: React.FC<ServerErrorProps>;
export default ServerError;
