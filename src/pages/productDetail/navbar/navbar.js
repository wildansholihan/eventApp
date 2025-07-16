import { Text, TouchableOpacity } from 'react-native';
import styles from '../productDetail.style';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProductDetailNavbar = function ProductDetailNavbar ({}) {
    // navbar
    const navigation = useNavigation();
  return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} />
          <Text style={styles.heading}>Product Detail</Text>
        </TouchableOpacity>
  );
}

export default ProductDetailNavbar