
import { Link } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function RegisterPage(){

    return(
       <View style={styles.containe}>
        <Image source={require('../../assets/imgs/logo.png')} style={styles.imglogo}/>
        <TextInput style={styles.input} placeholder="Nome de Usuario"/>
        <TextInput style={styles.input} placeholder="email"/>
        <TextInput style={styles.input} placeholder="senha"/>
        <TouchableOpacity style={styles.btnlogin}>
            <Text>Registrar</Text>
        </TouchableOpacity>
        <View style={styles.viewlink}>
                <Link to={{screen:'LoginPage'}}>voltar para tela de login</Link>
            
                <Link to={{screen:'ForgetPasswordPage'}}>esqueceu a senha</Link>
            </View>
       </View>
    )
}