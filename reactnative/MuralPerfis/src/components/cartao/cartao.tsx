import { View } from "react-native"
import {style} from "./style";

export default function cartao ({children}: any) {
    return (
        <View style={style.card}>{ children} </View>
    )
};