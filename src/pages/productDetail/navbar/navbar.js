import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../productDetail.style';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProductDetailNavbar = function ProductDetailNavbar ({}) {
    // navbar
    const navigation = useNavigation();
  return (
        <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} />
        </TouchableOpacity>
        <Text style={styles.heading}>Product Detail</Text>
        </View>
  );
}

export default ProductDetailNavbar