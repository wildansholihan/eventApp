import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff', // 🍃 cerah, segar, tidak terlalu putih
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Header
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
  headerTitle: {
    fontSize: 20,
    fontWeight: '700'
  },

  // Search
  searchWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#E0F2FE', // 🔵 biru muda, fresh
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
  searchFilterIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 24,
    height: 24,
    backgroundColor: '#3B82F6',
    borderRadius: 6,
  },

  // Grid & Product
  gridColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#DBF4FF', // 🩵 biru pastel
    width: '48%',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageWrapper: {
    backgroundColor: '#E0F2FE',
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
    fontWeight: '600',
    color: '#1F2937',
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#10B981', // 🟢 hijau stabil, fresh
    fontSize: 14,
  },
});

export default styles;