import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
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
    color: '#1E293B',
  },

  helperText: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 16,
    color: '#475569',
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
    borderColor: '#94A3B8',
    borderRadius: 4,
  },

  checkboxBoxSelected: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#ffffffff',
    marginRight: 12,
  },

  itemDetails: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },

  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#84CC16',
    marginVertical: 4,
  },

  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  qtyButton: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  qtyNumber: {
    marginHorizontal: 8,
    fontWeight: '600',
    color: '#1E293B',
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
    borderColor: '#E2E8F0',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalTextDel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },

  contentContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },

  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },

  checkoutButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  checkoutButtonDisabled: {
    backgroundColor: '#94A3B8',
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
    padding: 24,
  },

  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22C55E',
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
    backgroundColor: '#DC2626',
    paddingVertical: 10,
    flex: 1,

    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },

  modalCancelButton: {
    backgroundColor: '#94A3B8',
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