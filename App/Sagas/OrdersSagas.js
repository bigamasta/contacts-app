import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import OrdersActions from '../Redux/OrdersRedux'

export function * getContacts (api) {
  // make the call to the api
  const response = yield call(api.getContacts)

  if (response.ok) {
    const contacts = path(['data', 'items'], response)

    // do data conversion here if needed
    yield put(OrdersActions.contactsSuccess(contacts))
  } else {
    yield put(OrdersActions.contactsFailure())
  }
}

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
