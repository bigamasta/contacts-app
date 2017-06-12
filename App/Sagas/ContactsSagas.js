import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import I18n from 'react-native-i18n'
import ContactsActions from '../Redux/ContactsRedux'

export function * getContacts (api) {
  let response

  // No internet connection
  try {
    response = yield call(api.getContacts)
  } catch (err) {
    return yield put(ContactsActions.fetchContactsFailure({
      message: I18n.t('internetConnectionNotAvailable'),
      code: 503
    }))
  }

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
