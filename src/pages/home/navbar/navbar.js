import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styles from '../home.style';

const BlogHomeNavbar = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = cartItems.length;

    // Tampilkan "9+" kalau item lebih dari 9
  const displayCount = totalItems > 9 ? '9+' : totalItems.toString();

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ position: 'relative' }}>
          <FontAwesomeIcon icon={faShoppingCart} size={20} color="#4b5563ff" style={styles.headerIcon} />
          {totalItems > 0 && (
            <View
              style={[
                styles.cartBadge,
                (displayCount.length > 1) && styles.cartBadgeOval,
              ]}
            >
              <Text style={styles.cartBadgeText}>{displayCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlogHomeNavbar;