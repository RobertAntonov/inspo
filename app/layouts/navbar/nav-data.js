import config from '~/config.json';

export const navLinks = [
  {
    label: 'contact',
    pathname: '/#contact',
  },
  {
    label: 'journal',
    pathname: '/projects/slice',
  },
  {
    label: 'work',
    pathname: '/projects/smart-sparrow',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `https://www.instagram.com/robert_antonov/`,
    icon: 'instagram',
  },
  {
    label: 'Behance',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'behance',
  },
  {
    label: 'Facebook',
    url: `https://github.com/${config.github}`,
    icon: 'facebook',
  },
];
