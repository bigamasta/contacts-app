import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import I18n from 'react-native-i18n'
import OrdersActions from '../Redux/OrdersRedux'

export function * getOrders (api, { id }) {
  let response

  try {
    response = yield call(api.getOrders, id)
  } catch (err) {
    return yield put(OrdersActions.fetchOrdersFailure({
      message: I18n.t('internetConnectionNotAvailable'),
      code: 503
    }))
  }

  const data = yield response.json()

  if (response.ok) {
    const orders = path(['items'], data)
    yield put(OrdersActions.fetchOrdersSuccess(orders))
  } else {
    const error = path(['error'], data)
    yield put(OrdersActions.fetchOrdersFailure(error))
  }
}
