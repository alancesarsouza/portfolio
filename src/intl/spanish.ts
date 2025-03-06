import { DictionaryShape } from './types';

const language: DictionaryShape = {
  cta: {},
  messages: {},
  forms: {},
  text: {
    hello: 'Hola mundo!',
  },
} as const;

export default language;
