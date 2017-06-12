import React from 'react'
import { Fab, Icon } from 'native-base'

import styles from './Styles/AddContactFABStyles'

const AddContactFAB = ({ onPress }: { onPress: () => void }) =>
  <Fab
    active
    style={styles.fab}
    position='bottomRight'
    onPress={onPress}>
    <Icon name='add' />
  </Fab>

export default AddContactFAB
