// @Flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- State Type ------------- */

type StateType = {
  fetching: boolean,
  error: boolean,
  firstAndLastName: string,
  phone: string
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setFirstAndLastName: ['firstAndLastName'],
  setPhone: ['phone'],
  createContactRequest: ['firstAndLastName', 'phone'],
  createContactSuccess: null,
  createContactFailure: null
})

export const AddContactTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: null,
  error: null,
  firstAndLastName: null,
  phone: null
})

/* ------------- Reducers ------------- */

// export const firstAndLastName = (state: StateType, { firstAndLastName }: { firstAndLastName: string }): StateType =>
//   state.merge({ firstAndLastName })
//
// export const phone = (state: StateType, { phone }: { phone: string }): StateType =>
//   state.merge({ phone })

const merge = (path: string) => (state: StateType, action): StateType =>
  state.merge({ [path]: action[path] })

export const request = (state: StateType): StateType =>
  state.merge({ fetching: true })

export const success = (state: StateType): StateType =>
  state.merge({ fetching: false, error: null })

export const failure = (state: StateType): StateType =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FIRST_AND_LAST_NAME]: merge('firstAndLastName'),
  [Types.SET_PHONE]: merge('phone'),
  [Types.CREATE_CONTACT_REQUEST]: request,
  [Types.CREATE_CONTACT_SUCCESS]: success,
  [Types.CREATE_CONTACT_FAILURE]: failure
})
