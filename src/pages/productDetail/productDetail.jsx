import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './productDetail.style';
import productDetailService from '../productDetail/productDetail.service';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  useEffect(() => {
    productDetailService.getProductDetailById(productId)
      .then(data => setProduct(data))
      .catch(err => console.error('Failed to fetch product detail:', err))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleBuyNow = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.productImageWrapper}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
        </View>

        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </ScrollView>

      {/* Footer Buttons */}
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

      {/* Buy Now Success Modal */}
      <Modal transparent visible={showSuccessModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesomeIcon icon={faCheckCircle} size={48} color="#10B981" />
            <Text style={styles.modalText}>Purchase Successful!</Text>
          </View>
        </View>
      </Modal>

      {/* Add to Cart Modal ✅ */}
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

export default ProductDetail;