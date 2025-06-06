import { ROUTES, EXTERNAL_LINKS, type RouteItem } from './routes';

export interface FooterCategory {
  title: string;
  links: RouteItem[];
}

export const footerCategories: FooterCategory[] = [
  {
    title: 'Site',
    links: Object.values(ROUTES),
  },
  {
    title: 'Social',
    links: [
      EXTERNAL_LINKS.LinkedIn,
      EXTERNAL_LINKS.GitHub,
    ],
  },
];
