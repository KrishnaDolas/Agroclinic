import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the type for the Root Stack Navigator
type RootStackParamList = {
  LanguageSelector: undefined;
  Home: undefined;
};

type LanguageSelectorScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LanguageSelector'
>;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigation = useNavigation<LanguageSelectorScreenNavigationProp>();

  const selectLanguage = async (language: 'en' | 'mr') => {
    // Change the language
    await i18n.changeLanguage(language);
    // Store the selected language in AsyncStorage
    await AsyncStorage.setItem('selectedLanguage', language);
    // Navigate to the home screen using `replace` to prevent going back to the language selector
    navigation.replace('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select your preferred language:</Text>
      <Button title="English" onPress={() => selectLanguage('en')} />
      <Button title="Marathi" onPress={() => selectLanguage('mr')} />
    </View>
  );
};

export default LanguageSelector;
