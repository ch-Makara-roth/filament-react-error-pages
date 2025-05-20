import { default as React } from 'react';
import { ErrorLayoutProps } from '../ErrorLayout';

export interface GenericErrorProps extends Partial<ErrorLayoutProps> {
    message?: string;
    customImage?: string;
}
declare const GenericError: React.FC<GenericErrorProps>;
export default GenericError;
