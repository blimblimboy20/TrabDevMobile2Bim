import { Text, View } from "react-native";

export default function MovieDetails( {route} ){

    const { filme } = route.params;

    return(
        <View>
            <Text>Teste</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )
}