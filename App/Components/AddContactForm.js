import React from 'react'
import I18n from 'react-native-i18n'
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base'

const AddContactForm = ({ onSubmit, onFirstNameAndLastNameChange, onPhoneChange }:
  { onSubmit: () => void, onFirstNameAndLastNameChange: () => void, onPhoneChange: () => void }): () => mixed =>
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder={I18n.t('firstAndLastName')} onChange={onFirstNameAndLastNameChange} />
          </Item>
          <Item last>
            <Input placeholder={I18n.t('phone')} onChange={onPhoneChange} />
          </Item>
          <Button block onPress={onSubmit} >
            <Text>{I18n.t('add')}</Text>
          </Button>
        </Form>
      </Content>
    </Container>

export default AddContactForm
