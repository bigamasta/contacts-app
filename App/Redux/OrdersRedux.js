// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- State Type ------------- */

export type OrderType = {
  name: ?string,
  count: ?string
}

type StateType = {
  fetching: boolean,
  error: boolean,
  orders: Array<OrderType>
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators }: { Types: Array<string>, Creators: () => mixed } = createActions({
  fetchOrdersRequest: null,
  fetchOrdersSuccess: ['orders'],
  fetchOrdersFailure: null
})

export const OrdersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: false,
  error: false,
  orders: []
})

/* ------------- Reducers ------------- */

export const request = (state: StateType): StateType =>
  state.merge({ fetching: true })

export const success = (path: string): () => mixed => (state: StateType, action: {}): StateType =>
  state.merge({ fetching: false, error: null, [path]: action[path] })

export const failure = (path: string): () => StateType => (state: StateType): StateType =>
  state.merge({ fetching: false, error: true, [path]: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: (state: StateType, action: {}) => mixed = createReducer(INITIAL_STATE, {
  [Types.FETCH_ORDERS_REQUEST]: request,
  [Types.FETCH_ORDERS_SUCCESS]: success('orders'),
  [Types.FETCH_ORDERS_FAILURE]: failure('orders')
})
