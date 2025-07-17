import {
  ROUTES,
  EXTERNAL_LINKS,
  type RouteItem,
  PROJECT_LINKS,
} from "./routes";

interface FooterCategory {
  title: string;
  links: RouteItem[];
}

export const footerCategories: FooterCategory[] = [
  {
    title: "Site",
    links: Object.values(ROUTES),
  },
  {
    title: "Social",
    links: [EXTERNAL_LINKS.LinkedIn, EXTERNAL_LINKS.GitHub],
  },
  {
    title: "External",
    links: [PROJECT_LINKS.MASTER_PROJECTS_PAGE],
  },
];
