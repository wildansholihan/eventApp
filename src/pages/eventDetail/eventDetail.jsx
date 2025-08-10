import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import eventDetailService from './eventDetail.service';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
      loading: true,
    };
    this.handleFavoritePress =  this.handleFavoritePress.bind(this);
  }

  async componentDidMount() {
    const { eventId } = this.props.route.params;

    try {
      const event = await eventDetailService.getById(eventId);
      this.setState({ event, loading: false });
    } catch (error) {
      console.error('Error fetching event detail:', error);
      this.setState({ loading: false });
    }
  }

  handleOpenLink = () => {
    const { event } = this.state;
    if (event?.eventUrl) {
      Linking.openURL(event.eventUrl).catch((err) =>
        console.error('Gagal membuka URL:', err)
      );
    }
  };

  handleFavoritePress = () => {
  const { event } = this.state;
  this.props.dispatch({ type: 'TOGGLE_FAVORITE', payload: event });
  };

  render() {
    const { event, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#333" />
        </View>
      );
    }

    if (!event) {
      return (
        <View style={styles.centered}>
          <Text>Event tidak ditemukan.</Text>
        </View>
      );
    }

    return (
      <View style={styles.wrapperContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
              <Text style={styles.backText}>Kembali</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.favoriteIcon}
              onPress={this.handleFavoritePress}
              
            >
            <Ionicons
              name={this.props.favorites?.some(fav => fav.id === event.id) ? 'heart' : 'heart-outline'}
              size={24}
              color="#fff"
            />

            </TouchableOpacity>
          </View>

            <Image
              source={{ uri: event.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.content}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.meta}>{event.date} • {event.time}</Text>
              <Text style={styles.meta}>{event.location}{event.city ? `, ${event.city}` : ''}</Text>
              <Text style={styles.description}>{event.description}</Text>
          </View>
        </ScrollView>
        
        {event.eventUrl && (
          <TouchableOpacity onPress={this.handleOpenLink} style={styles.visitButton}>
            <Text style={styles.visitText}>🎫 Cek Harga Ticket</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  container: { backgroundColor: '#fff', paddingBottom: 32 },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
  position: 'absolute',
  top: 40,
  left: 16,
  right: 16,
  zIndex: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  backText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },

  favoriteIcon: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 20,
  },

  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  meta: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 8,
    marginBottom: 8,
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  favoriteButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteText: {
    marginLeft: 8,
    color: '#E91E63',
    fontSize: 16,
  },
  visitButton: {
    bottom: 24,
    marginHorizontal: 24,
    padding: 12,
    backgroundColor: '#3F51B5',
    borderRadius: 6,
    alignItems: 'center',

  },
  visitText: {
    color: '#fff',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites, // sesuaikan dengan struktur state kamu
});

export default connect(mapStateToProps)(EventDetail);