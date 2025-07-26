import { View, Text, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import productDetailService from '../productDetail.service';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../productDetail.style';

const ProductDetailContent = function ProductDetailContent() {
    const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const cartItems = useSelector(state => state.cart.cartItems);
  const selectedIds = useSelector(state => state.cart.selectedIds);

  useEffect(() => {
    productDetailService.getProductDetailById(productId)
      .then(data => setProduct(data))
      .catch(err => console.error('Failed to fetch product detail:', err))
      .finally(() => setLoading(false));
  }, [productId]);


  const handleBuyNow = () => {
    const existsInCart = cartItems.some(item => item.id === product.id);

    if (!existsInCart) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    if (!selectedIds.includes(product.id)) {
      dispatch({ type: 'TOGGLE_SELECTED_ID', payload: product.id });
    }

    navigation.navigate('Cart')
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setShowAddToCartModal(true);
    setTimeout(() => {
      setShowAddToCartModal(false);
    }, 1500);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#4B5563" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }


  return (
    <View style={styles.contentContainer}>

        <View style={styles.productImageWrapper}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
        </View>

        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={handleBuyNow}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={showSuccessModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesomeIcon icon={faCheckCircle} size={48} color="#10B981" />
            <Text style={styles.modalText}>Purchase Successful!</Text>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={showAddToCartModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesomeIcon icon={faCartPlus} size={44} color="#3B82F6" />
            <Text style={styles.modalTextAdd}>Added to Cart!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductDetailContent;