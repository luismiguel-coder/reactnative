import { use, useState } from "react";
import {Text, View} from "react-native";
import Cartao  from "../cartao/cartao"
import Cabecalho from "../cabecalho/cabecalho";
import Botao from "../botao/botao";

import {estilo} from "./style";


function PerfilCartao({nome, position, color, bio}:any ) {
   const [curtidas, setCurtidas] = useState(0);
   const [seguir, setSeguir] = useState(false);
   const [mostrarBio, setMostrarBio] = useState(false);
    return(
   
        <Cartao>
            
            <Cabecalho nome={nome} position={position} color={color}/>
            
            {mostrarBio && <Text style = {estilo.bio}>{bio}</Text>}
           
            <Text style={estilo.contadorCurtidas}>❤️ {curtidas} Curtidas: </Text>
           
            <View style = {estilo.linhaBotoes}>
                <Botao 
                text="Curtir"
                
                onPress={()=> setCurtidas( curtidas + 1)}
                    />

                <Botao
                 text={seguir ? 'Seguindo ✓' : 'Seguir'} 
                 active={seguir}
                 onPress={()=>setSeguir(!seguir)}/>
                <Botao text={mostrarBio ? 'Ocultar Bio' : 'Ver Bio'} OnPress={()=>setMostrarBio(!mostrarBio)}/>
                
            </View>
        </Cartao>
    );


}

export default PerfilCartao;