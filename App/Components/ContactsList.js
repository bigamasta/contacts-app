// @Flow
import React from 'react'
import { Content, Container } from 'native-base'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'
import ContactListItem from './ContactListItem'
import { ContactType } from '../Redux/OrdersRedux'

const ContactsList = ({ contacts }: { contacts: Array<ContactType> }) =>
  <Container>
    <Content>
      {contacts ? contacts.map(({ name, phone, pictureUrl }) =>
        <ContactListItem key={name + phone} name={name} phone={phone} pictureUrl={pictureUrl} />
      ) : null}
    </Content>
  </Container>

export default setPropTypes({
  contacts: PropTypes.array
})(ContactsList)
