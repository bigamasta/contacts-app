// @flow
import React from 'react'
import { Content, Container } from 'native-base'
import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'
import ContactListItem from './ContactListItem'
import type ContactType from '../Redux/OrdersRedux'

type PropsType = {
  contacts: Array<ContactType>,
  onContactPress: () => mixed
}

const ContactsList = ({ contacts, onContactPress }: PropsType): () => mixed =>
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
