import { Middleware } from 'redux';
import { AxiosError } from 'axios';

const REQUEST_POSTFIX = 'REQUEST';
const SUCCESS_POSTFIX = 'SUCCESS';
const FAILURE_POSTFIX = 'FAILURE';

export interface IRequestMiddlwareData<D, E extends Error = Error> {
  isLoading: boolean;
  data?: D;
  error?: E;
}

export const request: Middleware = () => next => action => {
  // FSA compliant
  const { type, meta } = action;

  const arTypeName = type.split('_');

  if (arTypeName[arTypeName.length - 1] === REQUEST_POSTFIX && meta.promise) {
    // Remove _REQUEST suffix
    const typeName = type.split('_').slice(0, -1).join('_');

    // Extend the action.meta to let it know we're beginning an optimistic update
    next({
      ...action,
      payload: {
        isLoading: true,
        error: null,
      },
      meta,
    });

    meta.promise
      .then((data: any): void => {
        next({
          type: `${typeName}_${SUCCESS_POSTFIX}`,
          payload: {
            isLoading: false,
            error: null,
            data,
          },
          meta,
        });
      })
      .catch((error: AxiosError): void => {
        next({
          type: `${typeName}_${FAILURE_POSTFIX}`,
          payload: {
            isLoading: false,
            error,
          },
          meta,
        });
      });
  } else {
    return next(action);
  }
};
