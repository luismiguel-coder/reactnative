import { StyleSheet } from "react-native";


export const estilo = StyleSheet.create({
    texto : {
        color:"#0b61ff",
        fontWeight: "bold",
        fontSize:60,

    },
    
    btn :{
    backgroundColor: '#007BFF',
    paddingVertical: 12,       
    paddingHorizontal: 25,      
    borderRadius: 8,            
    alignItems: 'center',       
    justifyContent: 'center',   
    marginTop: 15,              
    width: '100%',              
    elevation: 3, 
    },

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

   input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#7e3333',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
})