import React from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { COLORS, SIZES } from '../Constrants/Themes'; // Adjust the import path based on your file structure

type RootStackParamList = {
  LanguageSelector: undefined;
  Onboarding: undefined;
  Login: undefined;
  HomeTabs: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

interface OnboardingScreensProps {
  navigation: OnboardingScreenNavigationProp;
}

// Preload images with proper type definition
const images: { [key: number]: any } = {
  1: require('../../assets/onboardScreen1.png'),
  2: require('../../assets/onboardScreen2.png'),
  3: require('../../assets/onboardScreen3.png'),
};

const slides = [
  { id: 1, key: 'discover' },
  { id: 2, key: 'chooseDish' },
  { id: 3, key: 'pickUpDelivery' },
];

const OnboardingScreens: React.FC<OnboardingScreensProps> = ({ navigation }) => {
  const { t } = useTranslation(); // Use the translation function

  const buttonLabel = (label: string) => (
    <View style={{ padding: 12 }}>
      <Text style={{ color: COLORS.title, fontWeight: '600', fontSize: SIZES.h4 }}>{label}</Text>
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => (
        <View style={{ flex: 1, alignItems: 'center', padding: 15, paddingTop: 100 }}>
          <Image source={images[item.id]} style={{ width: SIZES.width - 80, height: 400 }} resizeMode="contain" />
          <Text style={{ fontWeight: 'bold', color: COLORS.title, fontSize: SIZES.h1 }}>{t(`onboarding.${item.key}`)}</Text>
          <Text style={{ textAlign: 'center', paddingTop: 5, color: COLORS.title }}>{t(`onboarding.${item.key}_description`)}</Text>
        </View>
      )}
      activeDotStyle={{ backgroundColor: COLORS.primary, width: 30 }}
      showSkipButton
      renderNextButton={() => buttonLabel(t('onboarding.next'))}
      renderSkipButton={() => buttonLabel(t('onboarding.skip'))}
      renderDoneButton={() => buttonLabel(t('onboarding.done'))}
      onDone={() => navigation.navigate('Login')} // Move to login after onboarding
    />
  );
};

export default OnboardingScreens;
