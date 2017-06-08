import { StackNavigator } from 'react-navigation'
import ContactsScreen from '../Containers/ContactsScreen'
import OrderScreen from '../Containers/OrderScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Contacts: {
    screen: ContactsScreen
  },
  Order: {
    screen: OrderScreen
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ContactsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
