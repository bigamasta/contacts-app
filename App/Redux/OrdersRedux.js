// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- State Type ------------- */

export type OrderType = {
  name: ?string,
  count: ?string
}

export type ErrorType = {
  message: string,
  code: number
}

type StateType = {
  fetching: boolean,
  error: ?ErrorType,
  errorShown: boolean,
  orders: Array<OrderType>
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators }: { Types: Array<string>, Creators: () => mixed } = createActions({
  fetchOrdersRequest: null,
  fetchOrdersSuccess: ['orders'],
  fetchOrdersFailure: ['error'],
  toggleErrorShown: null
})

export const OrdersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: false,
  error: {
    message: null,
    code: null
  },
  errorShown: false,
  orders: []
})

/* ------------- Reducers ------------- */

export const request = (state: StateType): StateType =>
  state.merge({ fetching: true })

export const success = (path: string): () => mixed => (state: StateType, action: {}): StateType =>
  state.merge({ fetching: false, error: null, [path]: action[path] })

export const failure = (path: string): () => StateType => (state: StateType, { error }: { error: ErrorType }): StateType =>
  state.merge({ fetching: false, error, errorShown: true, [path]: null })

export const toggleErrorShown = (state: StateType): StateType =>
  state.merge({ errorShown: !state.errorShown })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: (state: StateType, action: {}) => mixed = createReducer(INITIAL_STATE, {
  [Types.FETCH_ORDERS_REQUEST]: request,
  [Types.FETCH_ORDERS_SUCCESS]: success('orders'),
  [Types.FETCH_ORDERS_FAILURE]: failure('orders'),
  [Types.TOGGLE_ERROR_SHOWN]: toggleErrorShown
})
