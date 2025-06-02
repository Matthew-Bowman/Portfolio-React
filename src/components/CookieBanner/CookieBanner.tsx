import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
    onAccept: () => void;
    onReject: () => void;
}

interface ConsentData {
    accepted: boolean;
    timestamp: number;
}

const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 6;

const consentExpired = (timestamp: number) => Date.now() - timestamp > SIX_MONTHS_MS;

const getConsentData = (): ConsentData | null => {
    const raw = localStorage.getItem('cookieConsent');
    if (!raw) return null;

    try {
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' && 'accepted' in parsed && 'timestamp' in parsed
            ? parsed
            : null;
    } catch {
        return null;
    }
};

const setConsentData = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
        accepted,
        timestamp: Date.now(),
    }));
};

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onReject }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consentData = getConsentData();

        if (!consentData || consentExpired(consentData.timestamp)) {
            setShow(true);
        }
    }, []);

    const handleAccept = useCallback(() => {
        setConsentData(true);
        setShow(false);
        onAccept();
    }, [onAccept]);

    const handleReject = useCallback(() => {
        setConsentData(false);
        setShow(false);
        onReject();
    }, [onReject]);

    if (!show) return null;

    return (
        <div
            className="position-fixed bottom-0 start-50 translate-middle-x mb-3"
            style={{ zIndex: 1050, maxWidth: '600px', width: '90%' }}
            role="alert"
            aria-live="polite"
            aria-atomic="true"
        >
            <div className="card shadow">
                <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="mb-3 mb-md-0">
                        <strong>We use cookies</strong> to improve your experience on this site. By accepting, you agree to our use of cookies.
                        {' '}
                        <Link to="/privacy-policy" >Learn more</Link>
                    </div>
                    <div className="ps-3 d-flex justify-content-end gap-3">
                        <button
                            className="btn btn-outline-danger"
                            onClick={handleReject}
                            aria-label="Reject cookies"
                        >
                            Reject
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleAccept}
                            aria-label="Accept cookies"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
