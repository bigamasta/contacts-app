// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base'
import { setPropTypes } from 'recompose'

import styles from './Styles/NavigationBarStyles'

export type NavBarConfigType = {
  title: string,
  withMenu?: boolean,
  withBack?: boolean,
  withAdd?: boolean,
  onBackPress?: () => void,
  onPlusPress?: () => void,
}

const NavigationBar = ({ title, withAdd, withBack, withMenu, onBackPress, onPlusPress }: NavBarConfigType): () => mixed =>
  <Header>
    <Left style={styles.iconGroup}>
      {withBack && <Button transparent onPress={() => onBackPress && onBackPress()}>
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
      {withAdd && <Button transparent onPress={() => onPlusPress && onPlusPress()}>
        <Icon name='add' />
      </Button>}
      {withMenu && <Button transparent>
        <Icon name='more' />
      </Button>}
    </Right>
  </Header>

export default setPropTypes({
  title: PropTypes.string.isRequired,
  withAdd: PropTypes.bool,
  back: PropTypes.bool,
  menu: PropTypes.bool,
  onBackPress: PropTypes.func
})(NavigationBar)
