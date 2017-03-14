import handleAction from './handleAction';

export default function createHandler(type, reducer) {
  return defaultState => handleAction(type, reducer, defaultState);
}
