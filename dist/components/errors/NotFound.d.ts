import { default as React } from 'react';
import { ErrorLayoutProps } from '../ErrorLayout';

export interface NotFoundProps extends Partial<ErrorLayoutProps> {
    message?: string;
    customImage?: string;
    suggestions?: string[];
}
declare const NotFound: React.FC<NotFoundProps>;
export default NotFound;
