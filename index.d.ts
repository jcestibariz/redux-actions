export type FluxActionType = string | symbol;

export interface FluxAction<P> {
  type: FluxActionType;
  payload: P;
  error?: boolean;
  meta?: any
}

export interface PayloadCreator<A, P> {
  (arg: A): P;
}

export interface MetaCreator<A> {
  (arg: A): any;
}

export interface ActionTag<P> {
}

export interface ActionCreator<A, P> extends ActionTag<P> {
  (arg?: A): FluxAction<P>
}

export interface Reducer<S, P> {
  (state: S, action: FluxAction<P>): S;
}

export type ActionType<P> = ActionCreator<any, P> | ActionTag<P> | FluxActionType;

export interface ActionHandler<S, P> {
  (defaultState: S): Reducer<S, P>
}

export declare function createAction<P>(
  type: FluxActionType,
  payloadCreator?: PayloadCreator<P, P>,
  metaCreator?: MetaCreator<P>
): ActionCreator<P, P>;
export declare function createAction<A, P>(
  type: FluxActionType,
  payloadCreator?: PayloadCreator<A, P>,
  metaCreator?: MetaCreator<A>
): ActionCreator<A, P>;

// TODO
//export declare function createActions();

export declare function handleAction<S, P>(
  type: ActionType<P>,
  reducer: Reducer<S, P> | undefined,
  defaultState: S
): Reducer<S, P>;

export declare function createHandler<S, P>(
  type: ActionType<P>,
  reducer: Reducer<S, P>
): ActionHandler<S, P>;

export declare function handleActions<S>(
  handlers: ActionHandler<S, any>[],
  defaultState: S
): Reducer<S, any>;


export declare function combineActions<P>(
  ...types: FluxActionType[]
): FluxActionType;
export declare function combineActions<P>(
  ...types: ActionTag<P>[]
): ActionTag<P>;
