// @Flow
import React from 'react'
import { Text } from 'native-base'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

// import styles from './Styles/ContactListItemStyle'
const ContactDetails = ({ details }) =>
  <View>
    {Object.keys(details).map(header =>
      <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 10, backgroundColor: '#57e06c' }} key={header + details[header]}>
        <Text style={{ fontWeight: 'bold' }}>{header}</Text>
        <Text>{details[header]}</Text>
      </View>
    )}
  </View>

export default setPropTypes({
  details: PropTypes.object
})(ContactDetails)
