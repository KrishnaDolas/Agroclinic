import React from 'react';
import { View, Text } from 'react-native';
import i18n from './localeHelper';

const RegistrationScreen = () => {
  return (
    <View>
      <Text>{i18n.t('register')}</Text>
    </View>
  );
};

export default RegistrationScreen;
