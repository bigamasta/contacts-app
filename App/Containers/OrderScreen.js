// @Flow
import React from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle } from 'recompose'

import NavigationBar from '../Components/NavigationBar'
import ContactDetails from '../Components/ContactDetails'
import Orders from '../Components/Orders'

import OrdersActions from '../Redux/OrdersRedux'

// Styles
// import styles from './Styles/LaunchScreenStyles'

const OrderScreen = ({ navigation: { state: { params: { contact: { id, phone, name } } } }, orders }) => {
  console.tron.log('id' + id)
  console.tron.log('phone' + phone)
  return <Container>
    <NavigationBar title={name} withAdd={Platform.OS === 'ios'} />
    <ContactDetails details={{ 'Phone': phone }} />
    <Orders orders={orders} />
  </Container>
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchOrders: () => dispatch(OrdersActions.fetchOrdersRequest())
  }
})

const withConfig = lifecycle({
  componentWillMount () {
    const { actions: { fetchOrders },
            navigation: { state: { params: { contact: { id } } } } } = this.props
    fetchOrders(id)
  }
})

const enhance = withConfig(OrderScreen)

export default connect(mapStateToProps, mapDispatchToProps)(enhance)
