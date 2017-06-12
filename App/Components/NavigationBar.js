import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base'
import { setPropTypes } from 'recompose'

import styles from './Styles/NavigationBarStyles'

const NavigationBar = ({ title, withAdd, back, menu = true, onBackPress }) =>
  <Header>
    <Left style={styles.iconGroup}>
      {back && <Button transparent onPress={() => onBackPress()}>
        <Icon name='arrow-back' />
      </Button>}
      <Button transparent>
        <Icon name='people' />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      {withAdd && <Button transparent>
        <Icon name='add' />
      </Button>}
      {menu && <Button transparent>
        <Icon name='more' />
      </Button>}
    </Right>
  </Header>

export type NavBarConfigType = {
  title?: string,
  menu?: boolean,
  back?: boolean,
  withAdd?: boolean,
  onBackPress?: () => void
}

export default setPropTypes({
  title: PropTypes.string.isRequired,
  withAdd: PropTypes.bool,
  back: PropTypes.bool,
  menu: PropTypes.bool,
  onBackPress: PropTypes.func
})(NavigationBar)
