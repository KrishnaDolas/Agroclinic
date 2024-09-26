import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Alert, 
  PermissionsAndroid, 
  Platform 
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Locandtemp from '../MiniComponents/Locandtemp'; // Ensure correct import path
import { launchCamera, CameraOptions, CameraType } from 'react-native-image-picker';

const Home = () => {
  const { t } = useTranslation();
  const [imageUri, setImageUri] = useState<string | null>(null); // Explicit type for imageUri

  // Function to request camera permissions
  const requestCameraPermission = async () => {
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
          }
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
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert(t('home.cameraPermissionDenied'));
      return;
    }

    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back' as CameraType, // Correct type for cameraType
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        Alert.alert(t('home.cameraCancel'));
      } else if (response.errorCode) {
        Alert.alert(t('home.cameraError'), response.errorMessage || '');
      } else if (response.assets && response.assets.length > 0) {
        const { uri } = response.assets[0];
        setImageUri(uri || null); // Ensure uri is defined
      }
    });
  };

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
            <Image source={{ uri: 'https://example.com/take_picture_icon.png' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.takePicture')}</Text>
          </View>
          {/* Diagnosis */}
          <View style={styles.healStep}>
            <Image source={{ uri: 'https://example.com/see_diagnosis_icon.png' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.seeDiagnosis')}</Text>
          </View>
          {/* Medicine */}
          <View style={styles.healStep}>
            <Image source={{ uri: 'https://example.com/get_medicine_icon.png' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.getMedicine')}</Text>
          </View>
        </View>

        {/* Display the selected image */}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.selectedImage} />
        )}

        {/* Take Picture Button */}
        <TouchableOpacity style={styles.takePictureButton} onPress={openCamera}>
          <Text style={styles.takePictureButtonText}>{t('home.takePictureButton')}</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Options */}
      <View style={styles.optionsGrid}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{t('home.fertilizerCalculator')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{t('home.pestsDiseases')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{t('home.cultivationTips')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>{t('home.pestsDiseaseAlert')}</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <Text style={styles.sectionTitle}>{t('home.welcomeTitle')}</Text>

      {/* Trending Products Section */}
      <View style={styles.trendingSection}>
        <Text style={styles.trendingTitle}>{t('home.trendingTitle')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* First Product Card */}
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://example.com/product_image_1.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productVideoTime}>00:54 | {t('home.productCategory')}</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLink}>
              <Image
                source={{ uri: 'https://example.com/product_thumbnail_1.jpg' }}
                style={styles.productThumbnail}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{t('home.goToProduct')}</Text>
                <Text style={styles.productName}>{t('home.productName1')}</Text>
              </View>
              <Text style={styles.arrowText}>→</Text>
            </TouchableOpacity>
          </View>

          {/* Second Product Card */}
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://example.com/product_image_2.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productVideoTime}>00:54 | {t('home.productCategory')}</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLink}>
              <Image
                source={{ uri: 'https://example.com/product_thumbnail_2.jpg' }}
                style={styles.productThumbnail}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{t('home.goToProduct')}</Text>
                <Text style={styles.productName}>{t('home.productName2')}</Text>
              </View>
              <Text style={styles.arrowText}>→</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  healIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
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
    width: '100%',
    height: 200,
    marginTop: 15,
  },
  optionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  trendingSection: {
    marginBottom: 20,
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCard: {
    width: 180,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    paddingBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productVideoTime: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 5,
  },
  playButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  productLink: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  productThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  arrowText: {
    fontSize: 18,
    color: '#e74c3c',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Home;
