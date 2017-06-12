// @flow
import { Alert } from 'react-native'

export type ErrorType = {
  code: number,
  message: string
}

const ErrorAlert = ({ code, message }: ErrorType, callback: () => mixed): () => void => {
  Alert.alert(
    `Error ${code}`,
    message,
    [
      { text: 'OK', onPress: () => callback && callback() }
    ],
    { cancelable: true }
  )
}

export default ErrorAlert
