import React from 'react'
import { Platform } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Content } from 'native-base'
// import I18n from 'react-native-i18n'

// import { Images } from '../Themes'

import NavigationBar from '../Components/NavigationBar'
import ContactListItem from '../Components/ContactListItem'

import OrdersActions from '../Redux/OrdersRedux'

// Styles
// import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  componentWillMount () {
    const { contacts } = this.props
    console.log('contacts', contacts)
  }

  render () {
    return (
      <Container>
        <NavigationBar title='Orders' withAdd={Platform.OS === 'ios'} />
        <Content>
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Patrik Prevuznak'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Matus Hornak'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Martin Homola'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Peter Slaninka'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Stefan Marcin'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Ondrej Matija'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Jakub Koval'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Michal Savinec'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Peter Konecny'} />
          <ContactListItem contactTelephone={'0902 390 656'} contactName={'Michal Jurecko'} />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.orders.contacts
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(OrdersActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
