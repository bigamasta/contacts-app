import { StackNavigator } from 'react-navigation'
import AddContactScreen from '../Containers/AddContactScreen'
import ContactsScreen from '../Containers/ContactsScreen'
import OrderScreen from '../Containers/OrderScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AddContact: {
    screen: AddContactScreen
  },
  Contacts: {
    screen: ContactsScreen
  },
  Order: {
    screen: OrderScreen
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Contacts',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
