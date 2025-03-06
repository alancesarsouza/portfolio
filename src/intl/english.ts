import { DictionaryShape } from './types';

const language: DictionaryShape = {
  cta: {},
  messages: {},
  forms: {},
  text: {
    hello: 'Hello world!',
  },
} as const;

export default language;
