import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: '1',
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
  },
  parcelas: {
    fontSize: 12,
    color: '#888',
  },
  btnComprar: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  textoBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});