import React from 'react'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { compose, mapProps } from 'recompose'
import AddContactActions from '../Redux/AddContactRedux'

import NavigationBar from '../Components/NavigationBar'
import AddContactForm from '../Components/AddContactForm'

const AddContactScreenScreen = ({ navBarConfig, actions: { createContact }, setFirstNameAndLastName, setPhone }) =>
  <Container>
    <NavigationBar {...navBarConfig} />
    <AddContactForm
      onSubmit={createContact}
      onFirstNameAndLastNameChange={setFirstNameAndLastName}
      onPhoneChange={setPhone} />
  </Container>

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    createContact: (firstAndLastName, phone) =>
      dispatch(AddContactActions.createContactRequest(firstAndLastName, phone)),
    setFirstNameAndLastName: (firstAndLastName) =>
      dispatch(AddContactActions.setFirstNameAndLastName(firstAndLastName)),
    setPhone: (phone) =>
      dispatch(AddContactActions.setPhone(phone))
  }
})

const withNavBarConfig = mapProps(
  (props) => ({
    navBarConfig: {
      back: true,
      menu: true,
      onBackPress: props.navigation.goBack,
      title: I18n.t('addNewContact')
    },
    ...props
  })
)

const enhance = compose(
  withNavBarConfig,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(AddContactScreenScreen)
