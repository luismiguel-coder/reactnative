import { View, Text }  from "react-native";
import {styles} from './style'

export default function Cabecalho ({name, position, color}: any){      
    return(
        <View>
            <View style={[styles.avatar,{backgroundColor:color}]}>
                <Text style={styles.avatarText}>{name[0]}</Text>
            </View>
            
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.position}>{position}</Text>
            </View>
        
        </View>

        
    );
}

