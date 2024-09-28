import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelector from './Components/Onbording/LanguageSelector';
import LoginScreen from './Components/LoginAndSignup/LoginScreen';
import HomeTabs from './Components/Navigation/Navigator'; // Assuming this handles the main home navigation
import OnboardingScreens from './Components/Onbording/OnboardingScreen1';
import RegisterScreen from './Components/LoginAndSignup/RegisterScreen';
import FertilizerCalculator from './Components/MiniComponents/FertilizerCalculator'; // Import the FertilizerCalculator
import Petsanddiseases from './Components/MiniComponents/Petsanddiseases';
import Cultivation from './Components/MiniComponents/Cultivation';
import Petsanddiseasesalert from './Components/MiniComponents/Petsanddiseasesalert';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelector">
        <Stack.Screen 
          name="LanguageSelector" 
          component={LanguageSelector} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OnboardingScreen1" 
          component={OnboardingScreens} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: true, title: 'Register' }} 
        />
        <Stack.Screen 
          name="HomeTabs" 
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FertilizerCalculator" 
          component={FertilizerCalculator} 
          options={{ title: 'Fertilizer Calculator' }} 
        />
        <Stack.Screen 
          name="Petsanddiseases" 
          component={Petsanddiseases} 
          options={{ title: 'Pets and Diseases' }} 
        />
        <Stack.Screen 
          name="Cultivation" 
          component={Cultivation} 
          options={{ title: 'Cultivation Tips' }} 
        />
        <Stack.Screen 
          name="Petsanddiseasesalert" 
          component={Petsanddiseasesalert} 
          options={{ title: 'Pets And Diseases Alert' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
