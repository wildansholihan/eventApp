import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#2563EB',
    height: 18,
    minWidth: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeOval: {
    minWidth: 26,
    borderRadius: 12,
    paddingHorizontal: 6,
  },

  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

  searchWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 14,
    color: '#1E293B',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 14,
    width: 20,
    height: 20,
  },
  clearInput: {
    position: 'absolute',
    right: 12,
    top: 14,
    width: 24,
    height: 24,
  },
  noProductContainer: {
    top: 20,
    alignItems: 'center',
  },
  noProductText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },

  gridColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageWrapper: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productTitle: {
    color: '#111827',
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    color: '#84CC16',
    fontSize: 14,
  },
});

export default styles;