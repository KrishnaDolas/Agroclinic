import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const ProfileScreen = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language: 'en' | 'mr') => {
    i18n.changeLanguage(language); // Change the language
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('profile.description')}</Text>
      <Button title="Switch to English" onPress={() => switchLanguage('en')} />
      <Button title="Switch to Marathi" onPress={() => switchLanguage('mr')} />
    </View>
  );
};

export default ProfileScreen;
