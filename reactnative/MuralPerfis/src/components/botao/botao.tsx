import { TouchableOpacity, Text } from "react-native";
import {styles} from "./styles";

function botao({onPress, text, active }: any){
    return (
        <TouchableOpacity onPress={onPress} style= {[styles.btn, active && styles.btnTextactive]}>
            <Text style= {[styles.btnText, active && styles.btnTextactive]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default botao;