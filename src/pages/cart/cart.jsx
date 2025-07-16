import React, { useState } from 'react';
import {
  View,

} from 'react-native'
import styles from './cart.style';

import CartNavbar from './navbar/navbar';
import CartContent from './content/content';

const Cart = () => {

  return (
    <View style={styles.container}>
      <CartNavbar />
      <CartContent />
    </View>
  );
};

export default Cart;