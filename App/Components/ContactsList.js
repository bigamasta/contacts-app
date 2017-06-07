// @Flow
import React from 'react'
import { Content, Container } from 'native-base'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'
import ContactListItem from './ContactListItem'
import { ContactType } from '../Redux/OrdersRedux'

const ContactsList = ({ contacts, onContactPress }: { contacts: Array<ContactType>, onContactPress: () => mixed }) =>
  <Container>
    <Content>
      {contacts ? contacts.map((contact: ContactType) =>
        <ContactListItem
          key={contact.name + contact.phone}
          contact={contact}
          onContactPress={onContactPress} />
      ) : null}
    </Content>
  </Container>

export default setPropTypes({
  contacts: PropTypes.array
})(ContactsList)
