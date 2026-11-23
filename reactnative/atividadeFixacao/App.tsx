
import { StatusBar } from 'expo-status-bar';
import { Platform,Alert, StyleSheet, Text, View, Button, Image} from 'react-native';
import foto from './assets/people.jpg'  


export default function App() {


  function showAlert(message: string) {
    if (Platform.OS === 'web') {
      window.alert(message);
    } else {
      Alert.alert('Aviso', message);
    }
  }


  return (
    <View style={styles.container}>
      <Image
        source={foto}
        style = {styles.imagem}
        resizeMode='cover'
      />
      <Text style = {styles.titulo}>
        Vou comemorar meu aniversário e você é meu convidado especial. Conto com a sua presença!
        </Text>
      <StatusBar style="auto" />
      
      <View style={styles.infoBox}>
      <View style={styles.colunaQuadrados}>
         <View style={styles.quadrado}>
        <Text style={styles.p}>
         
         
        
         <Text style={styles.italico}>Data:</Text>10/07/2027
          </Text> 
          </View>
        
        <View style={styles.quadrado2}>
        <Text style={styles.p2}>
          
        
        
          <Text style={styles.italico}>Local:</Text> Rua Waldemar Falcão (Horto Florestal)
        </Text> 
        </View>
       
       <View style={styles.quadrado3}>
        <Text style={styles.p3}>
          
          <Text style={styles.italico}>Obs:</Text>
          Por favor, confirme sua presença para deixarmos seu nome na portaria!</Text> 
      </View>
      
      </View>
          <Text style= {styles.assinaturaVertical}>Assinado:Luara</Text>
          <Button 
            color="#841584"
            title='Confirmar Presença'
             onPress={() => showAlert('Presença Confirmada!')}
            />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64056791',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize:18,
    fontWeight:"bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,    
  },
  
  
  infoBox: { 
    width: "100%",
    gap: 10,

  },
  
  colunaQuadrados: {
    width: '100%',
    alignItems: 'center',
    gap: 12, // Espaço vertical entre um quadrado e outro
    marginBottom: 20,
  },

   quadrado: {
    width: 240,           
    minHeight: 110,      
    backgroundColor: '#644c62', 
    borderRadius: 12,     
    borderWidth: 1,
    borderColor: '#555',  
    padding: 15,          
    justifyContent: 'center', 
    alignItems: 'center',     
  },

  quadrado2: {
    width: 240,           
    minHeight: 110,      
    backgroundColor: '#e429ce', 
    borderRadius: 12,     
    borderWidth: 1,
    borderColor: '#555',  
    padding: 15,          
    justifyContent: 'center', 
    alignItems: 'center',     
  },

  quadrado3: {
    width: 240,           
    minHeight: 110,      
    backgroundColor: '#e499de', 
    borderRadius: 12,     
    borderWidth: 1,
    borderColor: '#555',  
    padding: 15,          
    justifyContent: 'center', 
    alignItems: 'center',     
  },

  imagem : {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#611e37",
    marginBottom: 20
  },

  p: {
    fontSize:15,
    color: "#fff",
    marginBottom: 5,
    
  },
  
  p2: {
    fontSize: 18,
    color: "#fff",
    marginBottom:5,
  },

  p3: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
  },
  
  italico: {
    fontStyle: "italic",

  },

   assinaturaVertical: {
    position: 'absolute',
    right: -35, 
    top: '15%', 
    transform: [{ rotate: '-90deg' }], 
    fontSize: 14,
    color: '#555',
    letterSpacing: 1,
    fontWeight: "bold",
    fontFamily: Platform.OS === 'ios' ? 'Snell Roundhand' : 'cursive',
    
   }
});
