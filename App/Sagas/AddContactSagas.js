import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import I18n from 'react-native-i18n'
import AddContactActions from '../Redux/AddContactRedux'
import ContactsActions from '../Redux/ContactsRedux'
import { randomId } from '../Lib/idGenerator'

export function * createContact (api, { firstAndLastName, phone, callback }) {
  let response
  try {
    response = yield call(api.createContact, firstAndLastName, phone)
  } catch (err) {
    return yield put(AddContactActions.createContactFailure({
      message: I18n.t('internetConnectionNotAvailable'),
      code: 503
    }))
  }

  if (response.ok) {
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
