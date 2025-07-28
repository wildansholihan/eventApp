import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import EventCard from '../../components/eventCard/eventCard';
import getEvents from '../../components/eventCard/eventCard.service';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch events:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading events...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Discover Events</Text>
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  separator: {
    height: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#555',
  }
});

export default Home;