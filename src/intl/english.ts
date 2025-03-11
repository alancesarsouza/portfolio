import { DictionaryShape } from './types';

const language: DictionaryShape = {
  cta: {
    challenges: 'Challenges',
    comments: 'Comments',
    contact: 'Contact',
    explorer: 'Explorer',
    github: 'Github',
    home: 'Home',
    integration: 'Integration',
    libraries: 'Libraries',
    mostComment: 'Project most commented',
    portfolio: 'Portfolio',
    technologies: 'Technologies',
  },
  messages: {},
  forms: {},
  text: {
    hello: 'Hello world!',
  },
} as const;

export default language;
