import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../Pages/MoviesPage';
import MovieDetails from '../Pages/MovieDetails';

const Stack =createNativeStackNavigator();

export default function AppRoutes(){

    return(
        <Stack.Navigator>
        
        <Stack.Screen name="MoviesPage" component={MoviesPage} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MoviesDetails" component={MovieDetails} />
      </Stack.Navigator>
    )
}