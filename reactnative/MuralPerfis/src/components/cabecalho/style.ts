import { StyleSheet } from "react-native"

export  const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        alignItems:"center",
        marginBottom:12,

    },

    avatar: {
        width: 48,
        height:48,
        borderRadius:24,
        alignItems:"center",
        justifyContent:"center",
        marginRight:12
    },

    avatarText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight:'bold'
    },


    name: {
        fontSize: 18,
        fontWeight:600
    },

    position:{
        color: "#64748b"
    }


})