import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { setLanguage } from './localeHelper';
import { useNavigation } from '@react-navigation/native';

const MultiLanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const navigation = useNavigation();

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setLanguage(lang);  // Update the app's language
  };

  const goToRegistration = () => {
    navigation.navigate('Registration');  // Navigate to registration
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agro Clinic</Text>

      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={() => handleLanguageChange('en')}>
          <Text style={selectedLanguage === 'en' ? styles.selected : styles.unselected}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleLanguageChange('mr')}>
          <Text style={selectedLanguage === 'mr' ? styles.selected : styles.unselected}>Marathi</Text>
        </TouchableOpacity>
      </View>

      <Button title="Submit" onPress={goToRegistration} />
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
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  selected: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  unselected: {
    fontSize: 18,
    color: 'grey',
    marginHorizontal: 10,
  },
});

export default MultiLanguageScreen;
