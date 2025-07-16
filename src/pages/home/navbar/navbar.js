import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../home.style';

const BlogHomeNavbar = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesomeIcon icon={faShoppingCart} size={20} color="#4b5563ff" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlogHomeNavbar;