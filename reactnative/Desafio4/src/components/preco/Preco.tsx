import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

interface PrecoProps {
  valor: string;
  parcelas: string;
}

export default function Preco({ valor, parcelas }: PrecoProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Preço à vista</Text>
        <Text style={styles.valor}>R$ {valor}</Text>
        <Text style={styles.parcelas}>{parcelas}</Text>
      </View>

      <TouchableOpacity 
        style={styles.btnComprar} 
        onPress={() => Alert.alert('Compra', 'Produto adicionado ao carrinho!')}
      >
        <Text style={styles.textoBtn}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}