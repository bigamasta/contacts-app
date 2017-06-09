import { call, put } from 'redux-saga/effects'
import AddContactActions from '../Redux/AddContactRedux'

export function * createContact (api, { firstAndLastName, phone }) {
  // make the call to the api
  const response = yield call(api.createContact, firstAndLastName, phone)

  if (response.ok) {
    yield put(AddContactActions.createContactSuccess())
  } else {
    yield put(AddContactActions.createContactFailure())
  }
}
