import { ReactNode } from 'react';

export interface ErrorComponentProps {
    title?: string;
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
export interface ErrorPagesConfig {
    use_custom_error_pages: boolean;
    use_in_filament: boolean;
    styles: {
        theme: 'light' | 'dark' | 'system';
        colors: {
            primary: string;
            secondary: string;
            danger: string;
            warning: string;
            info: string;
            success: string;
            background: string;
            text: string;
        };
        layout: {
            centered: boolean;
            max_width: string;
            padding: string;
        };
        animations: {
            enabled: boolean;
            type: 'fade' | 'slide' | 'bounce';
            duration: number;
        };
        custom_classes: {
            container: string;
            header: string;
            content: string;
            button: string;
        };
    };
    global_props: Record<string, any>;
    error_components: Record<string, string>;
    development_mode: boolean;
}
declare global {
    interface Window {
        filamentReactErrorPages?: {
            config: ErrorPagesConfig;
            errorCode: number;
            componentName: string;
            props: Record<string, any>;
        };
    }
}
