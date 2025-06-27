export interface RouteItem {
    label: string;
    path: string;
    external: boolean;
}

/*------------------------*/
/* Internal Route Mapping */
/*------------------------*/
const rawRoutes = {
    Home: { label: 'Home', path: '/', external: false },
    ContactUs: { label: 'Contact', path: '/contact-us', external: false },
    Privacy: { label: 'Privacy Policy', path: '/privacy-policy', external: false },
} as const;

type RouteKey = keyof typeof rawRoutes;

export const ROUTES: { [K in RouteKey]: RouteItem } = rawRoutes;

/*-----------------------*/
/* External Link Mapping */
/*-----------------------*/
const rawExternalLinks = {
    GitHub: { label: 'GitHub', path: 'https://github.com/Matthew-Bowman/', external: true },
    GitHub_Pages: { label: 'GitHub Pages', path: 'https://matthew-bowman.github.io/', external: true },
    LinkedIn: { label: 'LinkedIn', path: 'https://www.linkedin.com/in/matthew-bowman-969085218/', external: true },
} as const;

type ExternalLinksKey = keyof typeof rawExternalLinks;

export const EXTERNAL_LINKS: { [K in ExternalLinksKey]: RouteItem } = rawExternalLinks;

/*-----------------------*/
/* External Link Mapping */
/*-----------------------*/
const rawProjectLinks = {
    MASTER_PROJECTS_PAGE: { label: 'Projects', path: `${EXTERNAL_LINKS.GitHub_Pages.path}Portfolio/`, external: true },

    Repo_ESP32_WifiManager: { label: 'ESP32 WifiManager', path: `${EXTERNAL_LINKS.GitHub.path}ESP32-WifiManager/`, external: true },
    Repo_SmartDeviceHub: { label: 'Smart Device Hub', path: `${EXTERNAL_LINKS.GitHub.path}SmartDeviceHub/`, external: true },
    Repo_SaaS_Landing_Page: { label: 'SaaS Landing Page', path: `${EXTERNAL_LINKS.GitHub.path}SaaS-Landing-Page/`, external: true },
    Repo_Weather_Application: { label: 'Weather-Application', path: `${EXTERNAL_LINKS.GitHub.path}Weather-Application/`, external: true },
    Repo_TailwindCSS_Tutorial: { label: 'Discord Interface', path: `${EXTERNAL_LINKS.GitHub.path}TailwindCSS-Tutorial/`, external: true },
    Repo_Aidann_Portfolio: { label: 'Aidann Portfolio', path: `${EXTERNAL_LINKS.GitHub.path}Aidann-Portfolio/`, external: true },
    Repo_Sketch_It: { label: 'Sketch-It', path: `${EXTERNAL_LINKS.GitHub.path}Sketch-It/`, external: true },
    Repo_Social_Media: { label: 'Social Media', path: `${EXTERNAL_LINKS.GitHub.path}Social-Media/`, external: true },
    Repo_Discord_Gateway: { label: 'Discord Gateway', path: `${EXTERNAL_LINKS.GitHub.path}Discord-Gateway/`, external: true },
    Repo_JavaFish: { label: 'JavaFish', path: `${EXTERNAL_LINKS.GitHub.path}JavaFish/`, external: true },
    Repo_The_New_Infirmary: { label: 'The New Infirmary', path: `${EXTERNAL_LINKS.GitHub.path}The-New-Infirmary/`, external: true },

    Showcase_SaaS_Landing_Page: { label: 'SaaS Landing Page', path: `${EXTERNAL_LINKS.GitHub_Pages.path}SaaS-Landing-Page/`, external: true },
    Showcase_Weather_Application: { label: 'Weather-Application', path: `${EXTERNAL_LINKS.GitHub_Pages.path}Weather-Application/`, external: true },
    Showcase_TailwindCSS_Tutorial: { label: 'Discord Interface', path: `${EXTERNAL_LINKS.GitHub_Pages.path}TailwindCSS-Tutorial/`, external: true },
    Showcase_Sketch_It: { label: 'Sketch-It', path: `${EXTERNAL_LINKS.GitHub_Pages.path}Sketch-It/`, external: true },
} as const;

type ProjectLinksKey = keyof typeof rawProjectLinks;

export const PROJECT_LINKS: { [K in ProjectLinksKey]: RouteItem } = rawProjectLinks;
