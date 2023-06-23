import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containe:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',


    },

    imglogo:{
            height:'150px',
            width:'150px',
            marginBottom: 15
    },

    input:{
        border: '1px solid black',
        width:'70%',
        height:'40',
        padding: 5,
        marginBottom: 10
    },

    btnlogin:{
        border:"2px solid black",
        width:'70%',
        height:50,
        alignContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'red',

    },
    viewlink:{
        marginTop:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'70%'
    }
})

export default styles;