import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Ionicons } from '@expo/vector-icons';

import EventCard from '../../components/eventCard/eventCard';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      filteredFavorites: props.favorites,
    };

    this.debouncedSearch = debounce(this.handleSearch.bind(this), 200);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.favorites !== this.props.favorites) {
      this.setState({
        filteredFavorites: this.filterFavorites(this.state.searchQuery),
      });
    }
  }

  filterFavorites(query) {
    const { favorites } = this.props;
    if (!query) return favorites;

    const lowerQuery = query.toLowerCase();
    return favorites.filter((item) =>
      item.name?.toLowerCase().includes(lowerQuery)
    );
  }

  handleSearch(query) {
    const filtered = this.filterFavorites(query);
    this.setState({ searchQuery: query, filteredFavorites: filtered });
  }

  clearSearch = () => {
    this.setState({
      searchQuery: '',
      filteredFavorites: this.props.favorites,
    });
  };

  handleToggleFavorite = (event) => {
    this.props.toggleFavorite(event);
  };

  render() {
    const { filteredFavorites, searchQuery } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabel}>Your Favorites</Text>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search favorites..."
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

        {filteredFavorites.length === 0 ? (
          <View style={styles.centered}>
            <Text style={styles.emptyText}>You have no favorite events yet.</Text>
          </View>
        ) : (
          <FlatList
            data={filteredFavorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <EventCard
                event={item}
                isFavorite={true}
                onFavoritePress={() => this.handleToggleFavorite(item)}
              />
            )}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerLabel: { fontSize: 20, color: '#333', fontWeight: 'bold', marginBottom: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    marginLeft: 4,
  },
  listContent: { padding: 16, paddingBottom: 32 },
  separator: { height: 16 },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites || [],
});

export default connect(
  mapStateToProps,
  (dispatch) => ({
    toggleFavorite: (item) => dispatch({ type: 'TOGGLE_FAVORITE', payload: item }),
  })
)(Favorite);