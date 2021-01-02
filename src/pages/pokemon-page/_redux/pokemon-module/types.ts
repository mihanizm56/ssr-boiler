import { PokemonType } from '../../_types';
import { MODULE_REDUCER_NAME } from './constants';

export interface PokemonStateType {
  data: Array<PokemonType>;
  isLoading: boolean;
  initialLoaded: boolean;
}

export interface PokemonStatePartType {
  [MODULE_REDUCER_NAME]: PokemonStateType;
}
