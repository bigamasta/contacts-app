// @Flow
import React from 'react'
import { ListItem, Thumbnail, Text, Body, Left } from 'native-base'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { setPropTypes, defaultProps } from 'recompose'

import { ContactType } from '../Redux/OrdersRedux'
import styles from './Styles/ContactListItemStyle'
import { Images } from '../Themes'

type PropsType = {
  contact: ContactType,
  onContactPress: () => mixed
}

const ContactListItem = ({ avatarPhantom, contact, contact: { name, phone, pictureUrl }, onContactPress }: PropsType): () => mixed =>
  <View style={styles.item}>
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

const enhance: () => mixed = defaultProps({
  avatarPhantom: Images.ignite
})

export default enhance(setPropTypes({
  contact: PropTypes.object.isRequired,
  onContactPress: PropTypes.func
})(ContactListItem))
