import React, { useState } from 'react';
import { CookieBanner } from '../CookieBanner/CookieBanner';
import ReactGA from 'react-ga4';

export const CookieHandler: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const measurementId = "G-5DP5061Q4P";

    const handleAccept = () => {
        setConsentGiven(true);
        ReactGA.initialize(measurementId);
        ReactGA.send("pageview");
    }

    const handleReject = () => {
        setConsentGiven(false);
    }

    return (
        <div>
            {!consentGiven && <CookieBanner onAccept={handleAccept} onReject={() => handleReject} />}
        </div>
    );
};
