import React from 'react'
import { ListItem, Thumbnail, Text, Body, Left } from 'native-base'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { setPropTypes, defaultProps } from 'recompose'

import styles from './Styles/ContactListItemStyle'
import { Images } from '../Themes'

const ContactListItem = ({ avatarSource, contactName, contactTelephone, onClick }) =>
  <View style={styles.item}>
    <ListItem avatar>
      <Left>
        <Thumbnail square source={avatarSource} />
      </Left>
      <Body style={styles.itemBody}>
        <Text>{contactName}</Text>
        <Text note>{contactTelephone}</Text>
      </Body>
    </ListItem>
    <View style={styles.divider} />
  </View>

const enhance = defaultProps({
  avatarSource: Images.ignite
})

export default enhance(setPropTypes({
  contactTelephone: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired
})(ContactListItem))
