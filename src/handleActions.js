import handleAction from './handleAction';
import ownKeys from './ownKeys';
import reduceReducers from 'reduce-reducers';

export default function handleActions(handlers, defaultState) {
  const reducers = handlers instanceof Array ?
    handlers.map(handler => handler(defaultState))
    :
    ownKeys(handlers).map(type =>
      handleAction(type, handlers[type], defaultState)
    );
  const reducer = reduceReducers(...reducers);
  return (state, action) => reducer(state, action);
}
