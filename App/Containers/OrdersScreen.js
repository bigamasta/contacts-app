// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import { lifecycle, compose, mapProps } from 'recompose'

import NavigationBar from '../Components/NavigationBar'
import type NavBarConfigType from '../Components/NavigationBar'
import ContactDetails from '../Components/ContactDetails'
import Orders from '../Components/Orders'
import ErrorAlert from '../Components/ErrorAlert'

import OrdersActions from '../Redux/OrdersRedux'
import type OrderType from '../Redux/OrdersRedux'

type PropsType = {
  navBarConfig: NavBarConfigType,
  contactDetails: {},
  orders: Array<OrderType>
}

const OrderScreen = ({ navBarConfig, contactDetails, orders } : PropsType): () => mixed =>
  <Container>
    <NavigationBar {...navBarConfig} />
    <ContactDetails details={contactDetails} />
    <Orders orders={orders} />
  </Container>

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    error: state.orders.error,
    errorShown: state.orders.errorShown
  }
}

const mapDispatchToProps = (dispatch: () => mixed): { actions: {} } => ({
  actions: {
    fetchOrders: () => dispatch(OrdersActions.fetchOrdersRequest()),
    toggleErrorShown: () => dispatch(OrdersActions.toggleErrorShown())
  }
})

const withNavBarConfig: () => mixed = mapProps(
  (props) => ({
    navBarConfig: {
      withBack: true,
      withMenu: true,
      onBackPress: props.navigation.goBack,
      title: props.navigation.state.params.contact.name
    },
    ...props
  }: { navBarConfig: NavBarConfigType })
)

const withContactDetails: () => mixed = mapProps(
  (props) => ({
    contactDetails: {
      'Phone': props.navigation.state.params.contact.phone
    },
    ...props
  })
)

const withLifecycle: () => mixed = lifecycle({
  componentWillMount () {
    const { actions: { fetchOrders },
            navigation: { state: { params: { contact: { id } } } } } = this.props
    fetchOrders(id)
  },
  componentWillReceiveProps ({ error, errorShown, actions: { toggleErrorShown } }) {
    error && errorShown && ErrorAlert({ title: `Error ${error.code}`, description: error.message }, () => toggleErrorShown())
  }
})

const enhance: () => mixed = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavBarConfig,
  withContactDetails,
  withLifecycle
)

export default enhance(OrderScreen)
