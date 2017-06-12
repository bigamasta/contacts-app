// @Flow
import React from 'react'
import I18n from 'react-native-i18n'
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base'

type PropsType = {
  onSubmit: () => void,
  onFirstNameAndLastNameChange: () => void,
  onPhoneChange: () => void,
  firstAndLastName: string,
  phone: string
}

const AddContactForm = ({ onSubmit, onFirstNameAndLastNameChange, onPhoneChange,
  firstAndLastName, phone }: PropsType): () => mixed =>
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder={I18n.t('firstAndLastName')} onChangeText={onFirstNameAndLastNameChange} />
          </Item>
          <Item last>
            <Input placeholder={I18n.t('phone')} onChangeText={onPhoneChange} />
          </Item>
          <Button block onPress={() => onSubmit(firstAndLastName, phone)} >
            <Text>{I18n.t('add')}</Text>
          </Button>
        </Form>
      </Content>
    </Container>

export default AddContactForm
