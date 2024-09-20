import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';

// Get device dimensions for responsive design
const { width: screenWidth } = Dimensions.get('window');

const Crops = () => {
  const { t } = useTranslation();

  // Multiple crop data for the carousel
  const [cropData, setCropData] = useState([
    {
      imgUrl: 'https://yt3.ggpht.com/Ojc5MXUJmxAwxtgFGJkgRYDvE6I18ay86xpb-qTZ8r_xjA2579YWvTTD0hVpZAYhVGw8ExMxjw=s48-c-k-c0x00ffffff-no-rj',
      cropDesc: t('crops.firstCropDesc'), // Localized description
    },
    {
      imgUrl: 'https://example.com/crop-image2.jpg',
      cropDesc: t('crops.secondCropDesc'), // Localized description
    },
    {
      imgUrl: 'https://example.com/crop-image3.jpg',
      cropDesc: t('crops.thirdCropDesc'), // Localized description
    },
  ]);

  return (
    <View style={styles.container}>
      {/* Title for the screen */}
      <Text style={styles.header}>{t('crops.title')}</Text>

      {/* Horizontal ScrollView for carousel */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false} // Hide scroll indicator for a cleaner UI
        contentContainerStyle={styles.scrollViewContainer}>
        {/* Map through cropData to create each crop item */}
        {cropData.map((crop, index) => (
          <View key={index} style={styles.cropItem}>
            <FastImage
              style={styles.image}
              source={{ uri: crop.imgUrl }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.textContainer}>
              <Text style={styles.description}>{crop.cropDesc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9', // Light background for the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 20, // Space between header and carousel
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  cropItem: {
    width: screenWidth * 0.8, // 80% of screen width for each item
    marginHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Shadow on Android
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    padding: 15, // Padding for text
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4f4f4f',
    textAlign: 'center',
    lineHeight: 22, // Improve text readability
  },
});

export default Crops;
