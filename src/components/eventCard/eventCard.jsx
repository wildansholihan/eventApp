import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import styles from './eventCard.style'; // pastikan file ini dibuat

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  
  // 🔹 Ambil daftar favorites langsung dari Redux
  const favorites = useSelector(state => state.favorites.favorites);
  
  // 🔹 Cek apakah event ini sudah ada di favorites
  const isFavorite = favorites?.some(fav => fav.id === event.id);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${event.title}\n\n${event.url || 'No link available'}`,
      });
    } catch (error) {
      console.error('Share error:', error.message);
    }
  };

  const handleFavoritePress = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: event });
  };

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: event.image || 'https://via.placeholder.com/400x300?text=No+Image',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2}>
            {event.title || 'No Title'}
          </Text>
          <View style={styles.iconRow}>
            <TouchableOpacity onPress={handleFavoritePress} style={styles.icon}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={20}
                color={isFavorite ? '#E91E63' : '#999'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <Ionicons name="share-social-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.meta}>
          {event.date} • {event.time}
        </Text>

        <Text style={styles.meta}>
          {event.location}
          {event.city ? `, ${event.city}` : ''}
          {event.country ? `, ${event.country}` : ''}
        </Text>
      </View>
    </View>
  );
};

export default EventCard;