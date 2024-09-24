import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For input icons
import LinearGradient from 'react-native-linear-gradient'; // For gradient buttons and background
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const RegisterScreen = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !phone || !password || !confirmPassword) {
      Alert.alert(t('error.title'), t('error.fillFields'));
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert(t('error.title'), t('error.passwordMismatch'));
      return;
    }
    Alert.alert(t('success.title'), t('registration_successful'));
    // Implement your registration logic here
  };

  const toggleLanguage = (lang: 'en' | 'mr') => {
    i18n.changeLanguage(lang); // Change language using i18next
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.languageToggle}>
        <TouchableOpacity onPress={() => toggleLanguage('en')}>
          <Text style={[styles.languageText, i18n.language === 'en' && styles.activeLanguage]}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleLanguage('mr')}>
          <Text style={[styles.languageText, i18n.language === 'mr' && styles.activeLanguage]}>मराठी</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient colors={['#34A853', '#8BC34A']} style={styles.header}>
        <Text style={styles.headerText}>ऍग्रोक्लिनिक</Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        <Text style={styles.title}>{t('register.title')}</Text>

        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#555" />
          <TextInput 
            placeholder={t('register.namePlaceholder')} 
            placeholderTextColor="#888" 
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#555" />
          <TextInput 
            placeholder={t('register.phonePlaceholder')} 
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
            placeholder={t('register.passwordPlaceholder')} 
            placeholderTextColor="#888" 
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#555" />
          <TextInput 
            placeholder={t('register.confirmPasswordPlaceholder')} 
            placeholderTextColor="#888" 
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.gradientButton} onPress={handleRegister}>
          <LinearGradient colors={['#34A853', '#8BC34A']} style={styles.gradient}>
            <Text style={styles.buttonText}>{t('register.registerButton')}</Text>
          </LinearGradient>
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
    padding: 20,
  },
  languageToggle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
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
  header: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    width: '100%',
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
  gradientButton: {
    borderRadius: 8,
    marginVertical: 20,
    width: '100%',
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
