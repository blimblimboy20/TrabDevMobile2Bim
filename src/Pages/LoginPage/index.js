
import { Link } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){

    const {signIN} = useContext(AuthContext);

    return(
       <View style={styles.containe}>
        <Image source={require('../../assets/imgs/logo.png')} style={styles.imglogo}/>
        <TextInput style={styles.input} placeholder="email"/>
        <TextInput style={styles.input} placeholder="senha"/>
        <TouchableOpacity style={styles.btnlogin} onPress={()=> signIN()}>
            <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.viewlink}>
                <Link to={{screen:'RegisterPage'}}>Registre-se</Link>
            
                <Link to={{screen:'ForgetPasswordPage'}}>esqueceu a senha</Link>
            </View>
       </View>
    )
}