import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import OrdersActions from '../Redux/OrdersRedux'

export function * getOrders (api, { id }) {
  // make the call to the api
  const response = yield call(api.getOrders, id)

  if (response.ok) {
    const orders = path(['data', 'items'], response)

    // do data conversion here if needed
    yield put(OrdersActions.fetchOrdersSuccess(orders))
  } else {
    yield put(OrdersActions.fetchOrdersFailure())
  }
}
