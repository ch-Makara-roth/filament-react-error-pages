import { default as React, ReactNode } from 'react';

export interface ErrorLayoutProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    errorCode: number;
    showBackButton?: boolean;
    showHomeButton?: boolean;
    backButtonText?: string;
    homeButtonText?: string;
    homeUrl?: string;
    onBackClick?: () => void;
    onHomeClick?: () => void;
    illustration?: string;
    logo?: string;
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    showErrorCode?: boolean;
    additionalInfo?: string;
    companyName?: string;
    supportEmail?: string;
}
declare const ErrorLayout: React.FC<ErrorLayoutProps>;
export default ErrorLayout;
