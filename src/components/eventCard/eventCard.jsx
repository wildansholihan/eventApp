import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const EventCard = ({ event }) => (
  <TouchableOpacity style={styles.card}>
    {event.image && (
      <Image source={{ uri: event.image }} style={styles.image} />
    )}
    <View style={styles.content}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{new Date(event.date).toLocaleDateString()}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default EventCard;