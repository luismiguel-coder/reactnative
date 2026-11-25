import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { estilo } from "./styles";


function Titulo() {
    const [titulo, setTitulo] = useState("Título Inicial");
    const [textoInput, setTextoInput] = useState(""); 

    function atualizarTitulo() {
        if (textoInput.trim() !== "")  {
            setTitulo(textoInput);
            setTextoInput(""); 
        }
    }

    return (
        <View style={estilo.container}>
            <Text style={estilo.texto}>
                {titulo}
            </Text>
             
            <TextInput
                style={estilo.input}
                placeholder="Digite o novo título aqui..."
                onChangeText={(textoDigitado) => setTextoInput(textoDigitado)}
                value={textoInput}
            />

            
            <TouchableOpacity style={estilo.btn} onPress={atualizarTitulo}>
                <Text>Editar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Titulo;