import { IRequestParams } from '@mihanizm56/fetch-api';
import { pokemonsEndpoint } from '../../endpoints/pokemon';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: pokemonsEndpoint,
  responseSchema,
  mode: 'cors',
  isErrorTextStraightToOutput: true,
});
