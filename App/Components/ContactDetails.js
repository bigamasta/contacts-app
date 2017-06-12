// @flow
import React from 'react'
import { Text } from 'native-base'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

import styles from './Styles/ContactDetailsStyles'

const ContactDetails = ({ details }: { details: {}}) =>
  <View>
    {Object.keys(details).map(header =>
      <View style={styles.detailContainer} key={header + details[header]}>
        <Text style={styles.detailKey}>{header}</Text>
        <Text>{details[header]}</Text>
      </View>
    )}
  </View>

export default setPropTypes({
  details: PropTypes.object
})(ContactDetails)
