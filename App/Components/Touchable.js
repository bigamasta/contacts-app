// @Flow
import React from 'react'
import { Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native'

const Touchable = ({ onPress, children }: { onPress: () => mixed, children: () => mixed }) => {
  if (Platform.OS === 'ios') {
    console.tron.log('TouchableIOS')
    return <TouchableHighlight onPress={() => console.tron.log('yea')}>
      {children}
    </TouchableHighlight>
  } else if (Platform.OS === 'android') {
    console.tron.log('TouchableANDROID')
    return <TouchableNativeFeedback onPress={() => console.tron.log('yea')}>
      {children}
    </TouchableNativeFeedback>
  }
}

export default Touchable
