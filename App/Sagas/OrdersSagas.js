import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import OrdersActions from '../Redux/OrdersRedux'

export function * getOrders (api, { id }) {
  const response = yield call(api.getOrders, id)
  const data = yield response.json()

  if (response.ok) {
    const orders = path(['items'], data)
    yield put(OrdersActions.fetchOrdersSuccess(orders))
  } else {
    const error = path(['error'], data)
    yield put(OrdersActions.fetchOrdersFailure(error))
  }
}
