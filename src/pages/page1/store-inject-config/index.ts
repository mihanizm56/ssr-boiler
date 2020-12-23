import { StoreInjectConfig } from '@wildberries/redux-core-modules';
import reducerUI, {
  MODULE_REDUCER_NAME as UI_REDUCER_NAME,
} from '@/_redux/ui-module';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: UI_REDUCER_NAME,
      reducer: reducerUI,
    },
  ],
};
