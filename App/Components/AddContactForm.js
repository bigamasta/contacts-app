// @flow
import React from 'react'
import I18n from 'react-native-i18n'
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base'
import { mapProps } from 'recompose'
import ErrorAlert from './ErrorAlert'

type PropsType = {
  onSubmit: () => mixed,
  onFirstNameAndLastNameChange: () => mixed,
  onPhoneChange: () => mixed,
  firstAndLastName: string,
  phone: string
}

const validateFirstAndLastName = (firstAndLastName: string): void => {
  if (firstAndLastName.length < 5) throw I18n.t('firstAndLastNameNeedsToBeAtLeast5CharactersLong')
}

const validatePhone = (phone: string): void => {
  if (phone.length < 5) throw I18n.t('phoneNeedsToBeAtLeast5CharactersLong')
}

const validateForm = (firstAndLastName: string, phone: string): void => {
  validateFirstAndLastName(firstAndLastName)
  validatePhone(phone)
}

const AddContactForm = ({ onSubmit, onFirstNameAndLastNameChange, onPhoneChange,
  firstAndLastName, phone }: PropsType): React$Element<*> =>
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder={I18n.t('firstAndLastName')} onChangeText={onFirstNameAndLastNameChange} />
          </Item>
          <Item last>
            <Input placeholder={I18n.t('phone')} onChangeText={onPhoneChange} keyboardType='phone-pad' />
          </Item>
          <Button block onPress={() => onSubmit(firstAndLastName, phone)}>
            <Text>{I18n.t('add')}</Text>
          </Button>
        </Form>
      </Content>
    </Container>

const withValidate = mapProps((props) => ({
  ...props,
  onSubmit: (firstAndLastName, phone) => {
    try {
      validateForm(firstAndLastName, phone)
      props.onSubmit(firstAndLastName, phone)
    } catch (msg) {
      ErrorAlert({ title: I18n.t('formIsNotValid'), description: msg })
    }
  }
}))

export default withValidate(AddContactForm)
