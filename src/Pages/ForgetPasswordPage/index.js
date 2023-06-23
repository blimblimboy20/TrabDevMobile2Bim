import { Link } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function ForgetPasswordPage(){

    return(
       <View style={styles.containe}>
        <Image source={require('../../assets/imgs/logo.png')} style={styles.imglogo}/>
        <TextInput style={styles.input} placeholder="Usuario"/>
        <TextInput style={styles.input} placeholder="Email"/>
        <TouchableOpacity style={styles.btnlogin}>
            <Text>Recuperar</Text>
        </TouchableOpacity>
        <View style={styles.viewlink}>
                <Link to={{screen:'LoginPage'}}>voltar para tela de login</Link>
            
               
            </View>
       </View>
    )
}