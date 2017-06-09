import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    orders: require('./OrdersRedux').reducer,
    addContact: require('./AddContactRedux').reducer,
    contacts: require('./ContactsRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
