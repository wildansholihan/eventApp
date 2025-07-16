import { Text, TouchableOpacity } from 'react-native';
import styles from '../productDetail.style';
import { useNavigation } from '@react-navigation/native';

const ProductDetailNavbar = function ProductDetailNavbar ({}) {
    // navbar
    const navigation = useNavigation();
  return (
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.icon}>{'<'}</Text>
        <Text style={styles.headerTitle}>Home</Text>
      </TouchableOpacity>
  );
}

export default ProductDetailNavbar