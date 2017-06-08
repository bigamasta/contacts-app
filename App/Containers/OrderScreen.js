// @Flow
import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle, compose, mapProps } from 'recompose'

import NavigationBar from '../Components/NavigationBar'
import ContactDetails from '../Components/ContactDetails'
import Orders from '../Components/Orders'

import OrdersActions from '../Redux/OrdersRedux'

// Styles
// import styles from './Styles/LaunchScreenStyles'

const OrderScreen = ({ navBarConfig, contactDetails, orders }) =>
  <Container>
    <NavigationBar {...navBarConfig} />
    <ContactDetails details={contactDetails} />
    <Orders orders={orders} />
  </Container>

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

const withNavBarConfig = mapProps(
  (props) => ({
    navBarConfig: {
      back: true,
      menu: true,
      onBackPress: props.navigation.goBack,
      title: props.navigation.state.params.contact.name
    },
    ...props
  })
)

const withContactDetails = mapProps(
  (props) => ({
    contactDetails: {
      'Phone': props.navigation.state.params.contact.phone
    },
    ...props
  })
)

const withLifecycle = lifecycle({
  componentWillMount () {
    const { actions: { fetchOrders },
            navigation: { state: { params: { contact: { id } } } } } = this.props
    fetchOrders(id)
  }
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavBarConfig,
  withContactDetails,
  withLifecycle
)

export default enhance(OrderScreen)
