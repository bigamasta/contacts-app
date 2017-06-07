// @Flow
import React from 'react'
import { ListItem, Thumbnail, Text, Body, Left } from 'native-base'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { setPropTypes, defaultProps } from 'recompose'

import { ContactType } from '../Redux/OrdersRedux'
import styles from './Styles/ContactListItemStyle'
import { Images } from '../Themes'

const ContactListItem = ({ avatarPhantom, contact, onContactPress }:
  { contact: ContactType, onContactPress: () => mixed }) => {
  const { name, phone, pictureUrl } = contact
  return <View style={styles.item}>
    <ListItem avatar button onPress={() => onContactPress(contact)}>
      <Left>
        <Thumbnail square source={pictureUrl ? { uri: pictureUrl } : avatarPhantom} />
      </Left>
      <Body style={styles.itemBody}>
        <Text>{name}</Text>
        <Text note>{phone}</Text>
      </Body>
    </ListItem>
    <View style={styles.divider} />
  </View>
}

const enhance = defaultProps({
  avatarPhantom: Images.ignite
})

export default enhance(setPropTypes({
  contact: PropTypes.object.isRequired,
  onContactPress: PropTypes.func
})(ContactListItem))
