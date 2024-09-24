import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';

// Get device dimensions for responsive design
const { width: screenWidth } = Dimensions.get('window');

// Sample crop data for different stages
const cropStages = [
  {
    stage: 'Vegetative Stage',
    icon: 'https://example.com/vegetative-icon.png', // Add an icon for the stage
    data: [
      {
        imgUrl: 'https://example.com/crop-image1.jpg',
        title: 'Foot and Collar Rot',
        type: 'Fungus',
      },
      {
        imgUrl: 'https://example.com/crop-image2.jpg',
        title: 'Soybean Mosaic Virus',
        type: 'Virus',
      },
      {
        imgUrl: 'https://example.com/crop-image3.jpg',
        title: 'Bacterial Pustule',
        type: 'Bacteria',
      },
      {
        imgUrl: 'https://example.com/crop-image4.jpg',
        title: 'Whiteflies',
        type: 'Insect',
      },
    ],
  },
  {
    stage: 'Flowering Stage',
    icon: 'https://example.com/flowering-icon.png', // Add an icon for the stage
    data: [
      {
        imgUrl: 'https://example.com/crop-image5.jpg',
        title: 'Foot and Collar Rot',
        type: 'Fungus',
      },
      {
        imgUrl: 'https://example.com/crop-image6.jpg',
        title: 'Rhizoctonia Aerial Blight',
        type: 'Fungus',
      },
      // Add more diseases if needed
    ],
  },
];

const Crops = () => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      {cropStages.map((stage, index) => (
        <View key={index} style={styles.stageContainer}>
          {/* Stage header with icon */}
          <View style={styles.stageHeaderContainer}>
            <FastImage
              style={styles.stageIcon}
              source={{ uri: stage.icon }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.stageHeader}>{stage.stage}</Text>
          </View>

          {/* Crop cards in a grid */}
          <FlatList
            data={stage.data}
            numColumns={2} // Display in two columns
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <FastImage
                  style={styles.image}
                  source={{ uri: item.imgUrl }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            )}
          />

          {/* See More button */}
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>{t('See More')}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    paddingHorizontal: 20,
  },
  stageContainer: {
    marginBottom: 20,
  },
  stageHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stageIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  stageHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
  },
  type: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4f4f4f',
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  seeMoreButton: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#007BFF', // Blue background for button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  seeMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Crops;
