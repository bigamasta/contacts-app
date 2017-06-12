// @Flow
import React from 'react'
import { Platform } from 'react-native'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle, withProps, compose } from 'recompose'
// import I18n from 'react-native-i18n'

// import { Images } from '../Themes'

import NavigationBar from '../Components/NavigationBar'
// import ContactListItem from '../Components/ContactListItem'
import ContactsList from '../Components/ContactsList'
import AddContactFAB from '../Components/AddContactFAB'

import OrdersActions, { ContactType } from '../Redux/ContactsRedux'

// Styles
// import styles from './Styles/LaunchScreenStyles'

const ContactsScreen = ({ navBarConfig, contacts, showFAB, navigation: { navigate } }: { contacts: ?Array<ContactType> }): () => mixed =>
  <Container>
    <NavigationBar {...navBarConfig} />
    <ContactsList contacts={contacts} onContactPress={(contact: ContactType): void =>
      navigate('Order', { contact })
    } />
    {showFAB && <AddContactFAB onPress={() => navigate('AddContact')} />}
  </Container>

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchContacts: () => dispatch(OrdersActions.fetchContactsRequest())
  }
})

const withNavBarConfig = withProps({
  navBarConfig: {
    title: 'Orders',
    menu: true,
    back: false,
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
