// @Flow
import React from 'react'
import { ListItem, Text, Body } from 'native-base'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

import styles from './Styles/OrderStyles'
const Order = ({ name, count }: { name: string, count: number }) =>
  <ListItem>
    <Body style={styles.textContainerStyles}>
      <Text>{name}</Text>
      <Text>{count}x</Text>
    </Body>
  </ListItem>

export default setPropTypes({
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
})(Order)
