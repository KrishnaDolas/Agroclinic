import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Weather and Location Section */}
      <View style={styles.weatherContainer}>
        <Text style={styles.location}>{t('home.weatherLocation', { location: 'Latur', date: '16 Sep' })}</Text>
        <Text style={styles.weather}>{t('home.weatherCondition', { condition: 'Partly cloudy', tempRange: '20°C / 29°C' })}</Text>
        <Text style={styles.temperature}>{t('home.currentTemperature', { temp: '21°C' })}</Text>
        <Text style={styles.sprayCondition}>{t('home.sprayCondition', { condition: 'Unfavourable' })}</Text>
      </View>

      {/* Heal Your Crop Section */}
      <View style={styles.healContainer}>
        <Text style={styles.healTitle}>{t('home.healTitle')}</Text>
        <View style={styles.healSteps}>
          <View style={styles.healStep}>
            <Image source={{ uri: 'take_picture_icon_url' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.takePicture')}</Text>
          </View>
          <View style={styles.healStep}>
            <Image source={{ uri: 'see_diagnosis_icon_url' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.seeDiagnosis')}</Text>
          </View>
          <View style={styles.healStep}>
            <Image source={{ uri: 'get_medicine_icon_url' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.getMedicine')}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.takePictureButton}>
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

          {/* Additional product card */}
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
    padding: 20,
    backgroundColor: '#f4f6f8',
  },
  weatherContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  weather: {
    color: '#666',
    marginVertical: 4,
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  sprayCondition: {
    color: '#e74c3c',
    fontWeight: '600',
    marginTop: 8,
  },
  healContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
  },
  healTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  healSteps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  healStep: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  healIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  stepText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  takePictureButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  takePictureButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  trendingSection: {
    marginBottom: 20,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productVideoTime: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  playButton: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  productLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 12,
    fontWeight: '600',
    color: '#ff6347',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
  },
  arrowText: {
    fontSize: 20,
    color: '#ff6347',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Home;
