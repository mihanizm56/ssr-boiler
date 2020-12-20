import { Middleware } from 'redux';
import { inspect } from 'util';

const inspectObject = (object: Record<string, any>): string =>
  inspect(object, {
    colors: true,
    breakLength: 10,
    maxArrayLength: 5,
    depth: 1,
  });

export const createLogger = (): Middleware => () => next => action => {
  let formattedPayload = '';
  if (action.toString !== Object.prototype.toString) {
    formattedPayload = action.toString();
  } else if (typeof action.payload !== 'undefined') {
    formattedPayload = inspectObject(action.payload);
  } else {
    formattedPayload = inspectObject(action);
  }

  console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
  next(action);
};
