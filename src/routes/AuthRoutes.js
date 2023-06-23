import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ForgetPasswordPage from '../Pages/ForgetPasswordPage';

const Stack =createNativeStackNavigator();

export default function AuthRoutes(){
    

    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage}/>
            <Stack.Screen name="RegisterPage" component={RegisterPage}/>
            <Stack.Screen name="ForgetPasswordPage" component={ForgetPasswordPage}/>
        </Stack.Navigator>

    );

}