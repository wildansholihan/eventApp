import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../cart.style';
import { useNavigation } from '@react-navigation/native';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

const CartNavbar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedIds = useSelector(state => state.cart.selectedIds);
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleTrashPress = () => {
    if (selectedIds.length > 0) {
      dispatch({ type: 'SET_SHOW_DELETE_MODAL', payload: true });
    }
  };

  return (
    <View style={styles.headerRow}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
      <Text style={styles.heading}>Your Cart</Text>
      <TouchableOpacity onPress={handleTrashPress}>
        <FontAwesomeIcon
          icon={faTrash}
          size={20}
          color={selectedIds.length > 0 ? '#DC2626' : '#9CA3AF'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartNavbar;  