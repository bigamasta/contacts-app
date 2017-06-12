import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AddContactActions from '../Redux/AddContactRedux'
import ContactsActions from '../Redux/ContactsRedux'
import { randomId } from '../Lib/idGenerator'

export function * createContact (api, { firstAndLastName, phone, callback }) {
  // make the call to the api
  const response = yield call(api.createContact, firstAndLastName, phone)

  if (response.ok) {
    console.tron.log(callback)
    callback && callback()
    yield put(AddContactActions.createContactSuccess({ name: firstAndLastName, phone }))
  } else {
    const data = yield response.json()
    const error = path(['error'], data)
    yield put(AddContactActions.createContactFailure(error))
  }
}

export function * appendContactToContacts ({ contact: { name, phone } }) {
  const id = randomId()
  yield put(ContactsActions.addContact({ id, name, phone }))
}
