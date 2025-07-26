import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/eventSlice';
import EventCard from '../../components/EventCard';

const Home = () => {
  const dispatch = useDispatch();
  const { events, status } = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      {status === 'loading' && <Text>Loading...</Text>}
      {status === 'error' && <Text>Error loading events</Text>}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 }
});

export default Home;