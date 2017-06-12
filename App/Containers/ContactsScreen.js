// @flow
import React from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle, withProps, compose } from 'recompose'

import NavigationBar from '../Components/NavigationBar'
import type NavBarConfigType from '../Components/NavigationBar'
import ContactsList from '../Components/ContactsList'
import AddContactFAB from '../Components/AddContactFAB'

import OrdersActions from '../Redux/ContactsRedux'
import type ContactType from '../Redux/ContactsRedux'

type PropsType = {
  navBarConfig: NavBarConfigType,
  contacts: ?Array<ContactType>,
  showFAB: boolean,
  navigation: {
    navigate: () => {}
  }
}

const ContactsScreen = ({ navBarConfig, contacts, showFAB, navigation: { navigate } }:
  PropsType): () => mixed =>
    <Container>
      <NavigationBar {...navBarConfig} />
      <ContactsList contacts={contacts} onContactPress={(contact: ContactType): void =>
        navigate('Order', { contact })
      } />
      {showFAB && <AddContactFAB onLog={() => navigate('AddContact')} />}
    </Container>

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts
  }
}

const mapDispatchToProps = (dispatch: () => mixed): { actions: {} } => ({
  actions: {
    fetchContacts: () => dispatch(OrdersActions.fetchContactsRequest())
  }
})

const withNavBarConfig = withProps({
  navBarConfig: {
    title: 'Orders',
    withMenu: true,
    withBack: false,
    withAdd: Platform.OS === 'ios'
  }
})

const withFAB = withProps({
  showFAB: Platform.OS === 'android'
})

const withLifecycle = lifecycle({
  componentWillMount () {
    const { actions: { fetchContacts } } = this.props
    fetchContacts()
  }
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavBarConfig,
  withFAB,
  withLifecycle
)

export default enhance(ContactsScreen)
