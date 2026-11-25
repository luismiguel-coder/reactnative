import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import DescricaoImagem from './src/components/descricao/Descricao';
import Preco from './src/components/preco/Preco';
import Produto from './src/components/produto/Produto';


import fotoProduto from './assets/tenis.jpeg';

export default function App() {
  return (
    <View style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        
        <Produto 
          categoria="Calçados Esportivo" 
          nome="Tênis Nike Air Zoom" 
        />

        <DescricaoImagem 
          imagem={fotoProduto}
          descricao="Tênis desenvolvido para alta performance, com cabedal respirável em mesh e amortecimento responsivo para corridas e treinos diários."
        />

        <Preco 
          valor="499,90" 
          parcelas="ou 10x de R$ 49,99 sem juros" 
        />

      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  conteudo: {
    padding: 20,
    flexGrow: 1,
  },
});
