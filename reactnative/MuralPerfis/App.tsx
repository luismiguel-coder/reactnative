import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import PerfilCartao from './src/components/perfilCartao/perfilCartão';
import { useState } from 'react';

export default function App() {
  
  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}>Mural de Perfis</Text>
      <PerfilCartao
      nome="Luis Miguel"
      position="Analista de Sistema "
      bio="Apaixonado por Tec"
      color= "#000"
      >
        
      </PerfilCartao>

        <PerfilCartao
      nome="Kamila"
      position="Matematica "
      bio="Que situação"
      color= "#100570"
      >
        
      </PerfilCartao>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    tela: {
      padding: 20,
      paddingTop:60,
      backgroundColor: '#f1f5f9'
    },

    titulo: {
      fontSize:26,
      fontWeight: 'bold',
      marginBottom: 16
    },

    nome: {
      fontSize: 18,
      fontWeight: 600
    },

    bio: {
      marginBottom:10,
      color: '#334155'
    }
});
