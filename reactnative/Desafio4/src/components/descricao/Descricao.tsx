import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { styles } from './style';

interface DescricaoImagemProps {
  imagem: ImageSourcePropType;
  descricao: string;
}

export default function DescricaoImagem({ imagem, descricao }: DescricaoImagemProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={imagem} 
        style={styles.imagem} 
        resizeMode="cover" 
      />
      <Text style={styles.tituloSecao}>Descrição do Produto</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}