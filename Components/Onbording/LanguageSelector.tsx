import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Locales/types';

type LanguageSelectorProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OnboardingScreen1'>;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ navigation }) => {
  const { i18n, t } = useTranslation();

  const selectLanguage = (language: 'en' | 'mr') => {
    i18n.changeLanguage(language);
    navigation.navigate('OnboardingScreen1'); // Changed to match the screen name in the Stack
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('select Language')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => selectLanguage('en')}>
        <Text style={styles.buttonText}>{t('english')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => selectLanguage('mr')}>
        <Text style={styles.buttonText}>{t('marathi')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'capitalize', // Ensure first letter is capitalized
  },
  button: {
    backgroundColor: '#34A853',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'capitalize', // Ensure first letter is capitalized
  },
});

export default LanguageSelector;
