// @Flow
import React from 'react'
import { Content, Container } from 'native-base'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'
import Order from './Order'
import { OrderType } from '../Redux/OrdersRedux'
import styles from './Styles/OrdersStyles'

const Orders = ({ orders }: { orders: Array<OrderType> }) =>
  <Container>
    <Content>
      {orders ? orders.map(({ name, count }) =>
        <View style={styles.orderContainer} key={name + count}>
          <Order name={name} count={count} />
        </View>
      ) : null}
    </Content>
  </Container>

export default setPropTypes({
  orders: PropTypes.array
})(Orders)
