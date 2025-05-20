import React, { ReactNode } from 'react';

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

const ErrorLayout: React.FC<ErrorLayoutProps> = ({
  title,
  subtitle,
  children,
  errorCode,
  showBackButton = true,
  showHomeButton = true,
  backButtonText = 'Go Back',
  homeButtonText = 'Go to Homepage',
  homeUrl = '/',
  onBackClick,
  onHomeClick,
  illustration,
  logo,
  primaryColor = '#3b82f6',
  backgroundColor = '#ffffff',
  textColor = '#1f2937',
  showErrorCode = true,
  additionalInfo,
  companyName,
  supportEmail,
}) => {
  const handleBackClick = () => onBackClick ? onBackClick() : window.history.back();
  const handleHomeClick = () => onHomeClick ? onHomeClick() : window.location.href = homeUrl;

  return (
    <div className="error-page" style={{ minHeight: '100vh', padding: '2rem', backgroundColor, color: textColor }}>
      <div className="error-container" style={{ maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
        {logo && <div><img src={logo} alt="Logo" style={{ maxHeight: '3rem', marginBottom: '2rem' }} /></div>}
        {illustration && <div><img src={illustration} alt="Error" style={{ maxWidth: '100%', marginBottom: '2rem' }} /></div>}
        
        {showErrorCode && <h1 style={{ fontSize: '5rem', color: primaryColor }}>{errorCode}</h1>}
        <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>{title}</h2>
        {subtitle && <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>{subtitle}</p>}
        
        {children}
        
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {showBackButton && (
            <button onClick={handleBackClick} style={{ backgroundColor: 'transparent', border: `1px solid ${primaryColor}`, color: primaryColor, padding: '0.75rem 1.5rem', borderRadius: '0.375rem' }}>
              {backButtonText}
            </button>
          )}
          {showHomeButton && (
            <button onClick={handleHomeClick} style={{ backgroundColor: primaryColor, border: 'none', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.375rem' }}>
              {homeButtonText}
            </button>
          )}
        </div>
        
        {(companyName || supportEmail) && (
          <div style={{ marginTop: '3rem', fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.5)' }}>
            {companyName && <p>{companyName}</p>}
            {supportEmail && <p>Need help? <a href={`mailto:${supportEmail}`} style={{ color: primaryColor }}>Contact support</a></p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorLayout;

