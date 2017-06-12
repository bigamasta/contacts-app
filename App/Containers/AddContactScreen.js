// @flow
import React from 'react'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { compose, mapProps, lifecycle } from 'recompose'
import AddContactActions from '../Redux/AddContactRedux'

import NavigationBar from '../Components/NavigationBar'
import type NavBarConfigType from '../Components/NavigationBar'
import AddContactForm from '../Components/AddContactForm'
import ErrorAlert from '../Components/ErrorAlert'

type ActionsType = {
  createContact: () => mixed,
  setFirstNameAndLastName: () => mixed,
  setPhone: () => mixed
}

type PropsType = {
  navBarConfig: NavBarConfigType,
  firstAndLastName: string,
  phone: string,
  actions: ActionsType
}

const AddContactScreenScreen = ({ navBarConfig, firstAndLastName, phone,
  actions: { createContact, setFirstNameAndLastName, setPhone } }: PropsType
  ): () => mixed =>
    <Container>
      <NavigationBar {...navBarConfig} />
      <AddContactForm
        onSubmit={createContact}
        onFirstNameAndLastNameChange={setFirstNameAndLastName}
        onPhoneChange={setPhone}
        firstAndLastName={firstAndLastName}
        phone={phone} />
    </Container>

const mapStateToProps = (state) => {
  return {
    firstAndLastName: state.addContact.firstAndLastName,
    phone: state.addContact.phone,
    error: state.addContact.error,
    errorShown: state.addContact.errorShown
  }
}

const mapDispatchToProps = (dispatch: () => mixed): { actions: {} } => ({
  actions: {
    createContact: (firstAndLastName, phone) =>
      dispatch(AddContactActions.createContactRequest(firstAndLastName, phone)),
    setFirstNameAndLastName: (firstAndLastName) =>
      dispatch(AddContactActions.setFirstAndLastName(firstAndLastName)),
    setPhone: (phone) =>
      dispatch(AddContactActions.setPhone(phone)),
    toggleErrorShown: () => dispatch(AddContactActions.toggleErrorShown())
  }
})

const withLifecycle = lifecycle({
  componentWillReceiveProps ({ error, errorShown, actions: { toggleErrorShown } }) {
    error && errorShown && ErrorAlert({ title: `Error ${error.code}`, description: error.message }, () => toggleErrorShown())
  }
})

const withNavBarConfig = mapProps(
  (props) => ({
    navBarConfig: {
      withBack: true,
      withMenu: true,
      onBackPress: props.navigation.goBack,
      title: I18n.t('addNewContact')
    },
    ...props
  }: { navBarConfig: NavBarConfigType })
)

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavBarConfig,
  withLifecycle
)

export default enhance(AddContactScreenScreen)
