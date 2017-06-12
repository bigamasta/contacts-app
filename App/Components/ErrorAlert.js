// @flow
import { Alert } from 'react-native'
import { defaultProps } from 'recompose'
import I18n from 'react-native-i18n'

export type ErrorType = {
  title: string,
  description: string
}

const ErrorAlert = ({ title, description }: ErrorType, callback?: () => mixed): any => {
  Alert.alert(
    `${title}`,
    description,
    [
      { text: 'OK', onPress: () => callback && callback() }
    ],
    { cancelable: true }
  )
}

export default defaultProps({
  title: I18n.t('error'),
  description: I18n.t('unknownError')
})(ErrorAlert)
