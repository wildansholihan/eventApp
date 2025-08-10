import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from './eventCard.style'; // pastikan file ini dibuat

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.handleShare = this.handleShare.bind(this);
    this.handleFavoritePress = this.handleFavoritePress.bind(this);
  }

  async handleShare() {
    const { event } = this.props;
    try {
      await Share.share({
        message: `${event.title}\n\n${event.url || 'No link available'}`,
      });
    } catch (error) {
      console.error('Share error:', error.message);
    }
  }

  handleFavoritePress() {
    const { event, dispatch } = this.props;
    dispatch({ type: 'TOGGLE_FAVORITE', payload: event });
  }

  render() {
    const { event, favorites } = this.props;

    // Cek apakah event ini sudah ada di daftar favorites
    const isFavorite = favorites?.some(fav => fav.id === event.id);

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
              <TouchableOpacity onPress={this.handleFavoritePress} style={styles.icon}>
                <Ionicons
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={20}
                  color={isFavorite ? '#E91E63' : '#999'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleShare}>
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
  }
}

// Ambil favorites langsung dari Redux
const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(EventCard);