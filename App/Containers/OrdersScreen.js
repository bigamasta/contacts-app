// @Flow
import React from 'react'
import { Platform } from 'react-native'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle } from 'recompose'
// import I18n from 'react-native-i18n'

// import { Images } from '../Themes'

import NavigationBar from '../Components/NavigationBar'
// import ContactListItem from '../Components/ContactListItem'
import ContactsList from '../Components/ContactsList'

import OrdersActions, { ContactType } from '../Redux/OrdersRedux'

// Styles
// import styles from './Styles/LaunchScreenStyles'

const LaunchScreen = ({ contacts }: { contacts: ?ContactType }): () => mixed =>
  <Container>
    <NavigationBar title='Orders' withAdd={Platform.OS === 'ios'} />
    <ContactsList contacts={contacts} />
  </Container>

const mapStateToProps = (state) => {
  return {
    contacts: state.orders.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchContacts: () => dispatch(OrdersActions.contactsRequest())
  }
})

const withConfig = lifecycle({
  componentWillMount () {
    const { actions: { fetchContacts } } = this.props
    fetchContacts()
  }
})

const enhance = withConfig(LaunchScreen)

export default connect(mapStateToProps, mapDispatchToProps)(enhance)
