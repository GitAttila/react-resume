import { AHButton } from '../models/ah-button.model';

export enum ProjectFilterKeys {
  ANGULAR_DEVELOPMENT = 'project-angular-development',
  WEB_DEVELOPMENT = 'project-web-development',
  UX_DESIGN = 'project-ux-design',
  GRAPHICS_DESIGN = 'project-graphics-design',
}

// must have double hyphens for later parsing
export const PROJECTS_BUTTONS_GROUP: AHButton[] = [
  {
    id: `btn-id--${ProjectFilterKeys.ANGULAR_DEVELOPMENT}`,
    caption: 'angular development',
  },
  {
    id: `btn-id--${ProjectFilterKeys.WEB_DEVELOPMENT}`,
    caption: 'web development',
  },
  {
    id: `btn-id--${ProjectFilterKeys.UX_DESIGN}`,
    caption: 'ux design',
  },
  {
    id: `btn-id--${ProjectFilterKeys.GRAPHICS_DESIGN}`,
    caption: 'graphics design',
  },
];
