import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Weather and Location Section */}
      <View style={styles.weatherContainer}>
        <Text style={styles.location}>Latur, 16 Sep</Text>
        <Text style={styles.weather}>Partly cloudy • 20°C / 29°C</Text>
        <Text style={styles.temperature}>21°C</Text>
        <Text style={styles.sprayCondition}>Spraying condition: Unfavourable</Text>
      </View>

      {/* Heal Your Crop Section */}
      <View style={styles.healContainer}>
        <Text style={styles.healTitle}>Heal your crop</Text>
        <View style={styles.healSteps}>
          <View style={styles.healStep}>
            <Image source={{ uri: 'take_picture_icon_url' }} style={styles.healIcon} />
            <Text style={styles.stepText}>Take a picture</Text>
          </View>
          <View style={styles.healStep}>
            <Image source={{ uri: 'see_diagnosis_icon_url' }} style={styles.healIcon} />
            <Text style={styles.stepText}>See diagnosis</Text>
          </View>
          <View style={styles.healStep}>
            <Image source={{ uri: 'get_medicine_icon_url' }} style={styles.healIcon} />
            <Text style={styles.stepText}>Get medicine</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.takePictureButton}>
          <Text style={styles.takePictureButtonText}>Take a picture</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Options */}
      <View style={styles.optionsGrid}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Fertilizer calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Pests & diseases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cultivation Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Pests and Disease Alert</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <Text style={styles.sectionTitle}>Welcome to AgroClinic</Text>

      {/* Trending Products Section */}
      <View style={styles.trendingSection}>
        <Text style={styles.trendingTitle}>Trending product 🔥</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://example.com/product_image_1.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productVideoTime}>00:54 | Pesticides</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLink}>
              <Image
                source={{ uri: 'https://example.com/product_thumbnail_1.jpg' }}
                style={styles.productThumbnail}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Go to product</Text>
                <Text style={styles.productName}>Super Star</Text>
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
            <Text style={styles.productVideoTime}>00:54 | Pesticides</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLink}>
              <Image
                source={{ uri: 'https://example.com/product_thumbnail_2.jpg' }}
                style={styles.productThumbnail}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Go to product</Text>
                <Text style={styles.productName}>Fine 5 Sc</Text>
              </View>
              <Text style={styles.arrowText}>→</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Footer Section */}
      <Text style={styles.footerText}>Explore more at AgroClinic</Text>
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
    width: '30%',
  },
  healIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  stepText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
  },
  takePictureButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  takePictureButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 16,
    textAlign: 'center',
  },
  trendingSection: {
    marginTop: 20,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e67e22',
    marginBottom: 20,
    textAlign: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginRight: 20,
    width: 260,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    marginBottom: 10,
  },
  productVideoTime: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderRadius: 50,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  productLink: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  productThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
  },
  productName: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  arrowText: {
    fontSize: 18,
    color: '#3498db',
  },
  footerText: {
    textAlign: 'center',
    color: '#000',
    marginTop: 30,
    fontSize: 16,
    marginBottom: 30,
  },
});

export default Home;
