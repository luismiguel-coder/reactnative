import React from 'react';
import { Text, View } from 'react-native';
import {styles} from  './style' 

interface ProdutoProps {
  nome: string;
  categoria: string;
}

export default function Produto({ nome, categoria }: ProdutoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>{categoria}</Text>
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

