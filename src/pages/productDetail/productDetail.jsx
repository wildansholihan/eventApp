import React from 'react';
import { View } from 'react-native';
import styles from './productDetail.style';
import ProductDetailNavbar from './navbar/navbar';
import ProductDetailContent from './content/content';

const ProductDetail = () => {

  return (
    <View style={styles.container}>
      <ProductDetailNavbar />
      <ProductDetailContent />
    </View>
  );
};

export default ProductDetail;