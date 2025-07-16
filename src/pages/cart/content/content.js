import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import styles from '../cart.style';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMinus, faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CartContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const selectedIds = useSelector(state => state.cart.selectedIds);
  const showDeleteModal = useSelector(state => state.cart.showDeleteModal);
  const showSuccessModal = useSelector(state => state.cart.showSuccessModal);

  const toggleSelect = (id) => {
    dispatch({ type: 'TOGGLE_SELECTED_ID', payload: id });
  };

  const handleQtyChange = (id, delta) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    const newQty = item.quantity + delta;
    if (newQty < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQty } });
  };

  const getTotal = () => {
    return cartItems
      .filter(item => selectedIds.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleDeleteSelected = () => {
    selectedIds.forEach(id => dispatch({ type: 'REMOVE_FROM_CART', payload: id }));
    dispatch({ type: 'CLEAR_SELECTED_IDS' });
    dispatch({ type: 'SET_SHOW_DELETE_MODAL', payload: false });
  };

  const handleBuy = () => {
    if (selectedIds.length === 0) return;
    dispatch({ type: 'SET_SHOW_SUCCESS_MODAL', payload: true });
    selectedIds.forEach(id => dispatch({ type: 'REMOVE_FROM_CART', payload: id }));
    dispatch({ type: 'CLEAR_SELECTED_IDS' });
    setTimeout(() => {
      dispatch({ type: 'SET_SHOW_SUCCESS_MODAL', payload: false });
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleSelect(item.id)} style={styles.checkbox}>
        <View
          style={[
            styles.checkboxBox,
            selectedIds.includes(item.id) && styles.checkboxBoxSelected,
          ]}
        />
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.qtyControl}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => handleQtyChange(item.id, -1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </TouchableOpacity>
          <Text style={styles.qtyNumber}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => handleQtyChange(item.id, 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      {selectedIds.length === 0 && cartItems.length > 0 && (
        <Text style={styles.helperText}>Pilih produk terlebih dahulu</Text>
      )}
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total: ${getTotal()}</Text>
        <TouchableOpacity
          style={[
            styles.checkoutButton,
            selectedIds.length === 0 && styles.checkoutButtonDisabled,
          ]}
          onPress={handleBuy}
          disabled={selectedIds.length === 0}
        >
          <Text style={styles.checkoutText}>Buy Product</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={showDeleteModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDel}>Are you sure you want to delete the selected product?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleDeleteSelected} style={styles.modalConfirmButton}>
                <Text style={styles.modalButtonText}>Ya</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => dispatch({ type: 'SET_SHOW_DELETE_MODAL', payload: false })} style={styles.modalCancelButton}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={showSuccessModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesomeIcon icon={faCheckCircle} size={48} color="#10B981" />
            <Text style={styles.modalText}>Purchase Successful!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartContent;