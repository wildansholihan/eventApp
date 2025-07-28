import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
      style={styles.avatar}
    />
    <Text style={styles.name}>Wildan Sho</Text>
    <Text style={styles.email}>wildan@example.com</Text>

    <View style={styles.infoBox}>
      <Text style={styles.infoTitle}>Member Since</Text>
      <Text style={styles.infoValue}>January 2024</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    width: '80%',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    color: '#555',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 4,
  },
});

export default Profile