import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Locandtemp from '../MiniComponents/Locandtemp'; // Ensure correct import path

const Home = () => {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* LocAndTemp Component - Weather and Location Section */}
      <Locandtemp />

      {/* Heal Your Crop Section */}
      <View style={styles.healContainer}>
        <Text style={styles.healTitle}>{t('home.healTitle')}</Text>
        <View style={styles.healSteps}>
          <View style={styles.healStep}>
            <Image source={{ uri: 'https://example.com/take_picture_icon.png' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.takePicture')}</Text>
          </View>
          <View style={styles.healStep}>
            <Image source={{ uri: 'https://example.com/see_diagnosis_icon.png' }} style={styles.healIcon} />
            <Text style={styles.stepText}>{t('home.seeDiagnosis')}</Text>
          </View>
          <View style={styles.healStep}>
            <Image source={{ uri: 'https://example.com/get_medicine_icon.png' }} style={styles.healIcon} />
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
    marginBottom: 20,
  },
  trendingSection: {
    marginBottom: 30,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  productCard: {
    width: 240,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productVideoTime: {
    marginTop: 5,
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
  playButtonText: {
    fontSize: 20,
    color: '#ff6347',
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
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 14,
    color: '#2c3e50',
  },
  productName: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  arrowText: {
    fontSize: 20,
    color: '#ff6347',
  },
  footerText: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Home;
