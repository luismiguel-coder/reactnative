import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const PALETA = {
  fundoTela: '#E2E8F0',
  fundoCartao: '#FFFFFF',
  botao: '#2563EB',
  textoPrincipal: '#1E293B',
  textoSecundario: '#64748B',
  fundoEtiqueta: '#DBEAFE',
  textoEtiqueta: '#1D4ED8',
};

export default function Index() {
  const [curtidas, setCurtidas] = useState(0);

  function handleCurtir() {
    setCurtidas(curtidas + 1);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.tela}>
        <View style={styles.cartao}>
          <Image
            source={require('../../foto.jpg')}
            style={styles.foto}
          />

          <Text style={styles.nome}>Luis Miguel</Text>

          <Text style={styles.cidadeIdade}>Camaçari, BA • 23 anos</Text>

          <Text style={styles.profissao}>Desenvolvedor Mobile</Text>

          <Text style={styles.descricao}>
            Apaixonado por tecnologia, criação de aplicativos e resolução de problemas. Sempre aprendendo coisas novas no universo React Native.
          </Text>

          <View style={styles.containerEtiquetas}>
            <View style={styles.etiqueta}>
              <Text style={styles.textoEtiqueta}>Programação</Text>
            </View>
            <View style={styles.etiqueta}>
              <Text style={styles.textoEtiqueta}>Música</Text>
            </View>
            <View style={styles.etiqueta}>
              <Text style={styles.textoEtiqueta}>Jogos</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.botaoCurtir}
            onPress={handleCurtir}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>Curtir ({curtidas})</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: PALETA.fundoTela,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cartao: {
    backgroundColor: PALETA.fundoCartao,
    width: '100%',
    maxWidth: 360,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  foto: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    borderWidth: 3,
    borderColor: PALETA.botao,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PALETA.textoPrincipal,
    textAlign: 'center',
  },
  cidadeIdade: {
    fontSize: 14,
    color: PALETA.textoSecundario,
    marginTop: 4,
    marginBottom: 8,
  },
  profissao: {
    fontSize: 16,
    fontWeight: '600',
    color: PALETA.botao,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 14,
    color: PALETA.textoPrincipal,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 18,
  },
  containerEtiquetas: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 22,
  },
  etiqueta: {
    backgroundColor: PALETA.fundoEtiqueta,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  textoEtiqueta: {
    color: PALETA.textoEtiqueta,
    fontSize: 12,
    fontWeight: '600',
  },
  botaoCurtir: {
    backgroundColor: PALETA.botao,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
