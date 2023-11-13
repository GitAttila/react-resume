import { AHButton } from '../models/ah-button.model';

export enum NavItem {
  HOME = 'home',
  PROFILE = 'profile',
  DEV_STACK = 'dev-stack',
  PROJECTS = 'projects',
  AWARDS = 'awards',
  CERTIFICATES = 'certificates',
}

export const NAV_ITEMS: AHButton[] = [
  { id: `navlink-${NavItem.HOME}`, caption: 'home', selected: true },
  { id: `navlink-${NavItem.PROFILE}`, caption: 'profile', selected: false },
  { id: `navlink-${NavItem.DEV_STACK}`, caption: 'dev stack', selected: false },
  { id: `navlink-${NavItem.PROJECTS}`, caption: 'projects', selected: false },
  { id: `navlink-${NavItem.AWARDS}`, caption: 'awards', selected: false },
  {
    id: `navlink-${NavItem.CERTIFICATES}`,
    caption: 'certificates',
    selected: false,
  },
];
