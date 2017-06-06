import { StackNavigator } from 'react-navigation'
import OrdersScreen from '../Containers/OrdersScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  OrdersScreen: { screen: OrdersScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'OrdersScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
