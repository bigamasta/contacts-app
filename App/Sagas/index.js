import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { OrdersTypes } from '../Redux/OrdersRedux'

/* ------------- Sagas ------------- */

import { getContacts, getOrders } from './OrdersSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(OrdersTypes.CONTACTS_REQUEST, getContacts, api),
    takeLatest(OrdersTypes.FETCH_ORDERS_REQUEST, getOrders, api)
  ]
}
