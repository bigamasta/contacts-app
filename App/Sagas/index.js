import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { AddContactTypes } from '../Redux/AddContactRedux'
import { ContactsTypes } from '../Redux/ContactsRedux'
import { OrdersTypes } from '../Redux/OrdersRedux'

/* ------------- Sagas ------------- */

import { createContact } from './AddContactSagas'
import { getContacts } from './ContactsSagas'
import { getOrders } from './OrdersSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(AddContactTypes.CREATE_CONTACT_REQUEST, createContact, api),
    takeLatest(ContactsTypes.FETCH_CONTACTS_REQUEST, getContacts, api),
    takeLatest(OrdersTypes.FETCH_ORDERS_REQUEST, getOrders, api)
  ]
}
