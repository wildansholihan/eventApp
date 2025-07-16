import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  scrollContainer: {
    padding: 16,
    paddingBottom: 120,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    marginBottom: 32,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  backText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
  },

  productImageWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },

  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },

  heading: {
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      color: '#111827',
  },

  productTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },

  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#10B981',
    marginBottom: 12,
  },

  productDescription: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },

  errorText: {
    fontSize: 16,
    color: '#DC2626',
    textAlign: 'center',
    marginTop: 32,
  },
  contentContainer: {
    flex: 1,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  addToCartButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  buyNowButton: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 12,
    marginLeft: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buyNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 10,
  },

  modalText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#10B981',
  },

    modalTextAdd: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
});

export default styles;