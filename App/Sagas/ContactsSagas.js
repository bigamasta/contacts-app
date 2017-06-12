import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ContactsActions from '../Redux/ContactsRedux'

export function * getContacts (api) {
  // make the call to the api
  const response = yield call(api.getContacts)
  const data = yield response.json()

  if (response.ok) {
    const contacts = path(['items'], data)

    // do data conversion here if needed
    yield put(ContactsActions.fetchContactsSuccess(contacts))
  } else {
    const error = path(['error'], data)
    yield put(ContactsActions.fetchContactsFailure(error))
  }
}
