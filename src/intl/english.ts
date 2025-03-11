import { DictionaryShape } from './types';

const language: DictionaryShape = {
  cta: {
    challenges: 'Challenges',
    technologies: 'Technologies',
    libraries: 'Libraries',
    integration: 'Integration',
  },
  messages: {},
  forms: {},
  text: {
    hello: 'Hello world!',
    home: 'Home',
    portfolio: 'Portfolio',
    comments: 'Comments',
    github: 'Github',
  },
} as const;

export default language;
