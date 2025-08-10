import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Ionicons } from '@expo/vector-icons';
import styles from './home.style';

import EventCard from '../../components/eventCard/eventCard';
import homeService from './home.service';
import FavoriteToast from '../../components/favoriteToast/favoriteToast';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      events: [],
      filteredEvents: [],
      loading: true,
      showToast: false,
    };

    this.debouncedSearch = debounce(this.handleSearch.bind(this), 200);
  }

  async componentDidMount() {
    try {
      const events = await homeService.getEvents();
      this.setState({
        events,
        filteredEvents: events,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching events:', error);
      this.setState({ loading: false });
    }
  }

  handleSearch(query) {
    const lowerQuery = query.toLowerCase();
    const filtered = this.state.events.filter((item) =>
      item.title?.toLowerCase().includes(lowerQuery)
    );
    this.setState({ searchQuery: query, filteredEvents: filtered });
  }

  clearSearch = () => {
    this.setState({
      searchQuery: '',
      filteredEvents: this.state.events,
    });
  };

  handleAddFavorite = (event) => {
    this.props.dispatch({ type: 'TOGGLE_FAVORITE', payload: event });
    this.setState({ showToast: true });

    setTimeout(() => this.setState({ showToast: false }), 3000);
  };

  goToFavorites = () => {
    this.setState({ showToast: false }, () => {
      this.props.navigation.navigate('Favorite');
    });
  };

  render() {
    const { filteredEvents, searchQuery, loading, showToast } = this.state;

    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#333" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabel}>Explore Events</Text>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search events..."
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={(text) => {
                this.setState({ searchQuery: text });
                this.debouncedSearch(text);
              }}
              placeholderTextColor="#aaa"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={this.clearSearch} style={styles.clearButton}>
                <Ionicons name="close-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* List */}
        {filteredEvents.length === 0 ? (
          <View style={styles.centered}>
            <Text>No events found.</Text>
          </View>
        ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EventDetail', { eventId: item.id })}
            >
            <EventCard
              event={item}
              onFavorite={() => this.handleAddFavorite(item)}
            />
            </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}

        {/* Toast */}
        {showToast && (
          <FavoriteToast
            message="Added to favorites"
            onViewAll={this.goToFavorites}
          />
        )}
      </View>
    );
  }
}

export default connect()(Home);