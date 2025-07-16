import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  helperText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 40,
  },

  listContainer: {
    paddingBottom: 100,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },

  checkbox: {
    marginRight: 8,
  },

  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
  },

  checkboxBoxSelected: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },

  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },

  itemDetails: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },

  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
    marginVertical: 4,
  },

  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  qtyButton: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  qtyNumber: {
    marginHorizontal: 8,
    fontWeight: '600',
    color: '#111827',
  },

  removeButton: {
    marginLeft: 12,
  },

  totalSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },

  checkoutButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  checkoutButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },

  checkoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },

  modalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginVertical: 12,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },

  modalConfirmButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 10,
    flex: 1,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },

  modalCancelButton: {
    backgroundColor: '#9CA3AF',
    paddingVertical: 10,
    flex: 1,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },

  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;