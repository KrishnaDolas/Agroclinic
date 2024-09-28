import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Locandtemp from '../MiniComponents/Locandtemp'; // Ensure correct import path
import {
  launchCamera,
  CameraOptions,
  CameraType,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Locales/types';

// Explicit type for navigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<NavigationProp>(); // Ensure type safety
  const { t } = useTranslation();
  const [imageUri, setImageUri] = useState<string | null>(null); // Explicit type for imageUri

  // Function to request camera permissions
  const requestCameraPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: t('home.cameraPermissionTitle'),
            message: t('home.cameraPermissionMessage'),
            buttonNeutral: t('home.cameraPermissionAskLater'),
            buttonNegative: t('home.cameraPermissionCancel'),
            buttonPositive: t('home.cameraPermissionOk'),
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      // On iOS, camera permission should already be handled in Info.plist
      return true;
    }
  }, [t]);

  // Camera launch handler
  const openCamera = useCallback(async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert(t('home.cameraPermissionDenied'));
      return;
    }

    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back' as CameraType, // Correct type for cameraType
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        Alert.alert(t('home.cameraCancel'));
      } else if (response.errorCode) {
        Alert.alert(t('home.cameraError'), response.errorMessage || '');
      } else if (response.assets && response.assets.length > 0) {
        const { uri } = response.assets[0];
        setImageUri(uri || null); // Ensure uri is defined
      }
    });
  }, [t, requestCameraPermission]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* LocAndTemp Component - Weather and Location Section */}
      <Locandtemp />

      {/* Heal Your Crop Section */}
      <View style={styles.healContainer}>
        <Text style={styles.healTitle}>{t('home.healTitle')}</Text>
        <View style={styles.healSteps}>
          {/* Take Picture */}
          <View style={styles.healStep}>
            <Icon
              name="camera"
              size={30}
              color="#2c3e50"
              style={styles.healIcon}
            />
            <Text style={styles.stepText}>{t('home.takePicture')}</Text>
          </View>
          {/* Diagnosis */}
          <View style={styles.healStep}>
            <Icon
              name="heartbeat"
              size={30}
              color="#2c3e50"
              style={styles.healIcon}
            />
            <Text style={styles.stepText}>{t('home.seeDiagnosis')}</Text>
          </View>
          {/* Medicine */}
          <View style={styles.healStep}>
            <Icon
              name="medkit"
              size={30}
              color="#2c3e50"
              style={styles.healIcon}
            />
            <Text style={styles.stepText}>{t('home.getMedicine')}</Text>
          </View>
        </View>

        {/* Display the selected image */}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.selectedImage} />
        )}

        {/* Take Picture Button */}
        <TouchableOpacity style={styles.takePictureButton} onPress={openCamera}>
          <Text style={styles.takePictureButtonText}>
            {t('home.takePictureButton')}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        {/* Fertilizer Calculator */}
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('FertilizerCalculator')}>
          <Icon name="calculator" size={30} color="#fff" />
          <Text style={styles.gridText}>{t('FertilizerCalculator')}</Text>
        </TouchableOpacity>

        {/* Pests & Diseases */}
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Petsanddiseases')}>
          <Icon name="bug" size={30} color="#fff" />
          <Text style={styles.gridText}>{t('home.pestsDiseases', 'Pests & Diseases')}</Text>
        </TouchableOpacity>

        {/* Cultivation Tips */}
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Cultivation')}>
          <Icon name="leaf" size={30} color="#fff" />
          <Text style={styles.gridText}>{t('home.cultivationTips', 'Cultivation Tips')}</Text>
        </TouchableOpacity>

        {/* Pests & Disease Alert */}
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Petsanddiseasesalert')}>
          <Icon name="exclamation-triangle" size={30} color="#fff" />
          <Text style={styles.gridText}>{t('home.pestsDiseaseAlert', 'Pests & Disease Alert')}</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <Text style={styles.sectionTitle}>{t('home.welcomeTitle')}</Text>

      {/* Trending Products Section */}
      <View style={styles.trendingSection}>
        <Text style={styles.trendingTitle}>{t('home.trendingTitle')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Product Cards */}
          {/* Repeated product cards would go here */}
        </ScrollView>
      </View>

      {/* Footer Section */}
      <Text style={styles.footerText}>{t('home.exploreMore')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    paddingTop: 20,
  },
  healContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  healTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  healSteps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  healStep: {
    flexDirection: 'column', // If you want the icon above the text
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  healIcon: {
    marginBottom: 10, // Add spacing between icon and text
  },
  stepText: {
    fontSize: 14,
    textAlign: 'center',
  },
  takePictureButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  takePictureButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  gridText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  trendingSection: {
    marginBottom: 20,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCard: {
    width: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
  },
  productVideoTime: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    backgroundColor: '#000',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  productLink: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  productThumbnail: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontWeight: 'bold',
  },
  productName: {
    color: '#7f8c8d',
  },
  arrowText: {
    fontSize: 18,
    marginLeft: 5,
  },
  footerText: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Home;
