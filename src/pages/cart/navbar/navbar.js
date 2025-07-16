import { Text, TouchableOpacity } from 'react-native';
import styles from '../cart.style';
import { useNavigation } from '@react-navigation/native';

const CartNavbar = function CartNavbar ({}) {
    // navbar
    const navigation = useNavigation();
  return (
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.icon}>{'<'}</Text>
        <Text style={styles.headerTitle}>Cart</Text>
      </TouchableOpacity>
  );
}

export default CartNavbar