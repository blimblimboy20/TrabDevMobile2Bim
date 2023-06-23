import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardFilme from './components/CardFilme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from './Pages/MoviesPage';
import MovieDetails from './Pages/MovieDetails';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import AuthRoutes from './routes/AuthRoutes';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';

const Stack =createNativeStackNavigator();

export default function App() {

  

  return (

    <NavigationContainer>

      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </NavigationContainer>
    
  );
}


