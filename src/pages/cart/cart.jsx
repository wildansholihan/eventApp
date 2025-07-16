import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './cart.style';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faMinus, faTrash, faCheckCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [selectedIds, setSelectedIds] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
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
    if (selectedIds.length === 0) return;
    selectedIds.forEach(id => dispatch({ type: 'REMOVE_FROM_CART', payload: id }));
    setSelectedIds([]);
    setShowDeleteModal(false);
  };

  const handleBuy = () => {
    if (selectedIds.length === 0) return;
    setShowSuccessModal(true);
    selectedIds.forEach(id => dispatch({ type: 'REMOVE_FROM_CART', payload: id }));
    setSelectedIds([]);
    setTimeout(() => setShowSuccessModal(false), 2000);
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
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} />
        </TouchableOpacity>
        <Text style={styles.heading}>Your Cart</Text>
        <TouchableOpacity onPress={() => selectedIds.length > 0 ? setShowDeleteModal(true) : null}>
          <FontAwesomeIcon icon={faTrash} size={20} color={selectedIds.length > 0 ? '#DC2626' : '#9CA3AF'} />
        </TouchableOpacity>
      </View>
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
            <Text style={styles.modalText}>Apakah yakin ingin menghapus produk yang dipilih?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleDeleteSelected} style={styles.modalConfirmButton}>
                <Text style={styles.modalButtonText}>Ya</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowDeleteModal(false)} style={styles.modalCancelButton}>
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
            <Text style={styles.modalText}>Produk telah dibeli!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;