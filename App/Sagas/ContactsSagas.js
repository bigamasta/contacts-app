import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ContactsActions from '../Redux/ContactsRedux'

export function * getContacts (api) {
  // make the call to the api
  const response = yield call(api.getContacts)

  if (response.ok) {
    const contacts = path(['data', 'items'], response)

    // do data conversion here if needed
    yield put(ContactsActions.fetchContactsSuccess(contacts))
  } else {
    const error = path(['data', 'error'], response)
    yield put(ContactsActions.fetchContactsFailure(error))
  }
}
