// @flow
import React from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle, withProps, compose, mapProps } from 'recompose'
import { createStructuredSelector } from 'reselect'

import selectors from './Selectors/ContactsScreenSelectors'

import NavigationBar from '../Components/NavigationBar'
import type NavBarConfigType from '../Components/NavigationBar'
import ContactsList from '../Components/ContactsList'
import AddContactFAB from '../Components/AddContactFAB'
import ErrorAlert from '../Components/ErrorAlert'

import ContactsActions from '../Redux/ContactsRedux'
import type ContactType from '../Redux/ContactsRedux'

type PropsType = {
  navBarConfig: NavBarConfigType,
  contacts: ?Array<ContactType>,
  showFAB: boolean,
  onContactPress: () => void,
  onAddContactPress: () => void
}

const ContactsScreen = ({ navBarConfig, contacts, showFAB, onContactPress, onAddContactPress }:
  PropsType): () => mixed =>
    <Container>
      <NavigationBar {...navBarConfig} />
      <ContactsList contacts={contacts} onContactPress={onContactPress} />
      {showFAB && <AddContactFAB onPress={onAddContactPress} />}
    </Container>

const mapDispatchToProps = (dispatch: () => mixed): { actions: {} } => ({
  actions: {
    fetchContacts: () => dispatch(ContactsActions.fetchContactsRequest()),
    toggleErrorShown: () => dispatch(ContactsActions.toggleErrorShown())
  }
})

const withHandlers = mapProps((props) => ({
  onContactPress: (contact: ContactType): void =>
    props.navigation.navigate('Order', { contact }),
  onAddContactPress: (): void =>
    props.navigation.navigate('AddContact'),
  ...props
}))

const withNavBarConfig = mapProps((props) => ({
  navBarConfig: {
    title: 'Orders',
    withMenu: true,
    withBack: false,
    withAdd: Platform.OS === 'ios',
    onPlusPress: props.onAddContactPress
  },
  ...props
}))

const withFAB = withProps({
  showFAB: Platform.OS === 'android'
})

const withLifecycle = lifecycle({
  componentWillMount () {
    const { actions: { fetchContacts } } = this.props
    fetchContacts()
  },
  componentWillReceiveProps ({ error, errorShown, actions: { toggleErrorShown } }) {
    error && errorShown && ErrorAlert({ title: `Error ${error.code}`, description: error.message }, () => toggleErrorShown())
  }
})

const enhance = compose(
  connect(createStructuredSelector({ ...selectors }), mapDispatchToProps),
  withHandlers,
  withNavBarConfig,
  withFAB,
  withLifecycle
)

export default enhance(ContactsScreen)
