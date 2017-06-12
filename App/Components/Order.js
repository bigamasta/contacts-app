// @flow
import React from 'react'
import { ListItem, Text, Body } from 'native-base'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

import styles from './Styles/OrderStyles'

type PropsType = {
  name: string,
  count: number
}

const Order = ({ name, count }: PropsType): () => mixed =>
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
