import { FeatureTimelineItem } from '../models/feature-timeline.model';

export const EXPERIENCE_LIST: FeatureTimelineItem[] = [
  {
    id: 'experience-1',
    date: '03/2022-present',
    title: 'Sentinel One',
    subtitle: 'Software engineer',
    keys: ['cyber security'],
    description:
      'Front - end development using latest Javascript frameworks and libraries: Angular and React.',
  },
  {
    id: 'experience-2',
    date: '03/2021-02/2022',
    title: 'Certicon (for Medtronic)',
    subtitle: 'Senior Angular development',
    keys: ['medical'],
    description:
      'Front - end development and UX design of an application for pacemaker implants and patient follow-ups.',
  },
  {
    id: 'experience-3',
    date: '08/2020-02/2021',
    title: 'TeamIT (for Komerční banka)',
    subtitle: 'Front-end software engineer',
    keys: ['investment banking'],
    description: 'Development of Investment Banking application using Angular.',
  },
  {
    id: 'experience-4',
    date: '11/2019-07/2020',
    title: 'Certicon (for Medtronic)',
    subtitle: 'Front-end software engineer and UX designer.',
    keys: ['medical'],
    description:
      'Part of an agile team developing application for Medtronic with use of Angular and charting libraries. Taking the lead in the UX design of the heart monitoring application.',
  },
  {
    id: 'experience-5',
    date: '01/2016-10/2019',
    title: 'Rockwell Automation',
    subtitle: 'Front-end software engineer and UX designer.',
    keys: ['industrial automation'],
    description:
      'Taking part in development of cloud solution within industrial automation field using Angular and Typescript. Visually designing cloud application and its workflows for industrial automation.',
  },
];
