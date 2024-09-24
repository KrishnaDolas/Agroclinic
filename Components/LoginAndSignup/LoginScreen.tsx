import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../../Locales/types'; // Adjust this path as needed

const LoginScreen = () => {
  const { t, i18n } = useTranslation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    if (phone === '' || password === '') {
      Alert.alert(t('error.title'), t('error.fillAllFields'));
      return;
    }
    // Implement your login logic here
    Alert.alert(t('success.title'), t('login_successful'));
    // Navigate to Home or Dashboard after successful login
    navigation.navigate('HomeTabs');
  };

  const toggleLanguage = (lang: 'en' | 'mr') => {
    i18n.changeLanguage(lang);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.languageToggle}>
        <TouchableOpacity onPress={() => toggleLanguage('en')}>
          <Text style={[styles.languageText, i18n.language === 'en' && styles.activeLanguage]}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleLanguage('mr')}>
          <Text style={[styles.languageText, i18n.language === 'mr' && styles.activeLanguage]}>
            मराठी
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ऍग्रोक्लिनिक</Text>
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.title}>{t('login.title', { defaultValue: 'Login' })}</Text>

        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#555" />
          <TextInput
            placeholder={t('login.enterPhoneNumber', { defaultValue: 'Enter Phone Number' })}
            placeholderTextColor="#888"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#555" />
          <TextInput
            placeholder={t('login.enterPassword', { defaultValue: 'Enter Password' })}
            placeholderTextColor="#888"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('login.loginButton', { defaultValue: 'Login' })}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerText}>
            {t('login.registerPrompt', { defaultValue: "Don't have an account? Register Now!" })}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageToggle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
    marginBottom: 20,
  },
  languageText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#888',
  },
  activeLanguage: {
    fontWeight: 'bold',
    color: '#34A853',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#34A853',
  },
  loginBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#34A853',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#333',
    fontSize: 16,
  },
});

export default LoginScreen;
