// components/FavoriteToast.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './favoriteToast.style';

const FavoriteToast = ({ message, onViewAll }) => {
  return (
    <View style={styles.toastContainer}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onViewAll}>
        <Text style={styles.link}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteToast;