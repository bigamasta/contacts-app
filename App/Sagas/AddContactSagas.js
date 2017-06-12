import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AddContactActions from '../Redux/AddContactRedux'

export function * createContact (api, { firstAndLastName, phone }) {
  // make the call to the api
  const response = yield call(api.createContact, firstAndLastName, phone)

  if (response.ok) {
    yield put(AddContactActions.createContactSuccess())
  } else {
    const error = path(['data', 'error'], response)
    yield put(AddContactActions.createContactFailure(error))
  }
}
