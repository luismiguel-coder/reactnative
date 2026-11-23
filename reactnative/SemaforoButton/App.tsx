import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [corAtiva, setCorAtiva] = useState<'vermelho' | 'amarelo' | 'verde'>('vermelho');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Controle do Semáforo</Text>

     
      <View style={styles.semaforo}>
        
        <View
          style={[
            styles.luz,
            { backgroundColor: corAtiva === 'vermelho' ? '#FF3B30' : '#4A1816' },
          ]}
        />
        
        <View
          style={[
            styles.luz,
            { backgroundColor: corAtiva === 'amarelo' ? '#FFCC00' : '#4D3F08' },
          ]}
        />
        
        <View
          style={[
            styles.luz,
            { backgroundColor: corAtiva === 'verde' ? '#34C759' : '#144220' },
          ]}
        />
      </View>

      
      <View style={styles.grupoBotoes}>
        
        <TouchableOpacity
          style={[
            styles.botao,
            corAtiva === 'vermelho' ? styles.botaoPressionado : styles.botaoNormal,
          ]}
          onPress={() => setCorAtiva('vermelho')}
        >
          <Text style={styles.textoBotao}>
            {corAtiva === 'vermelho' ? 'Pare (Pressionado)' : 'Pare (Normal)'}
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={[
            styles.botao,
            corAtiva === 'amarelo' ? styles.botaoPressionado : styles.botaoNormal,
          ]}
          onPress={() => setCorAtiva('amarelo')}
        >
          <Text style={styles.textoBotao}>
            {corAtiva === 'amarelo' ? 'Atenção (Pressionado)' : 'Atenção (Normal)'}
          </Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          disabled={corAtiva === 'vermelho'}
          style={[
            styles.botao,
            corAtiva === 'vermelho'
              ? styles.botaoDesabilitado
              : corAtiva === 'verde'
              ? styles.botaoPressionado
              : styles.botaoNormal,
          ]}
          onPress={() => setCorAtiva('verde')}
        >
          <Text style={styles.textoBotao}>
            {corAtiva === 'vermelho'
              ? 'Siga (Desabilitado)'
              : corAtiva === 'verde'
              ? 'Siga (Pressionado)'
              : 'Siga (Normal)'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 25,
  },
  semaforo: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#333',
    gap: 15,
    marginBottom: 35,
  },
  luz: {
    width: 75,
    height: 75,
    borderRadius: 37.5, 
  },
  grupoBotoes: {
    width: '100%',
    gap: 12,
  },
  botao: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
  },
 
  botaoNormal: {
    backgroundColor: '#2B6CB0',
    borderColor: '#63B3ED',
  },
 
  botaoPressionado: {
    backgroundColor: '#1A365D',
    borderColor: '#FFFFFF',
    transform: [{ scale: 0.97 }], 
  },
 
  botaoDesabilitado: {
    backgroundColor: '#4A5568',
    borderColor: '#718096',
    opacity: 0.45,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
