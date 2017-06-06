import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base'
import { setPropTypes } from 'recompose'

const NavigationBar = ({ title, withAdd }) =>
  <Header>
    <Left>
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
      <Button transparent>
        <Icon name='more' />
      </Button>
    </Right>
  </Header>

export default setPropTypes({
  title: PropTypes.string.isRequired
})(NavigationBar)
