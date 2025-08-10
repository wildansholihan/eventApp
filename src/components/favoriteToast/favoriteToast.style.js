import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default styles;