import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import types for navigation
import { RootStackParamList } from '../../Locales/types';  // Import your RootStackParamList

const { width: screenWidth } = Dimensions.get('window');

// Define CropItem interface
interface CropItem {
  imgUrl: string;
  title: string;
  type: string;
}

// Define the type for your navigation prop
type CropsNavigationProp = NavigationProp<RootStackParamList, 'Crops'>;

// Sample crop data
const cropStages = [
  {
    stage: 'Vegetative Stage',
    icon: 'https://example.com/vegetative-icon.png',
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
      // Add more crops here
    ],
  },
  {
    stage: 'Flowering Stage',
    icon: 'https://example.com/flowering-icon.png',
    data: [
      {
        imgUrl: 'https://example.com/crop-image3.jpg',
        title: 'Rhizoctonia Aerial Blight',
        type: 'Fungus',
      },
      // Add more crops here
    ],
  },
];

const Crops = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<CropsNavigationProp>(); // Correctly type navigation

  const handleItemPress = (item: CropItem) => {
    if (item.title === 'Foot and Collar Rot') {
      // Navigate to Noniplist screen
      navigation.navigate('Noniplist'); // Ensure this matches your route names
    }
    // Add more conditions if needed for other diseases
  };

  return (
    <ScrollView style={styles.container}>
      {cropStages.map((stage, index) => (
        <View key={index} style={styles.stageContainer}>
          {/* Stage Header */}
          <View style={styles.stageHeaderContainer}>
            <FastImage
              style={styles.stageIcon}
              source={{ uri: stage.icon }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.stageHeader}>{stage.stage}</Text>
          </View>

          {/* Crop Cards */}
          <FlatList
            data={stage.data}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress(item)}>
                <View style={styles.card}>
                  <FastImage
                    style={styles.image}
                    source={{ uri: item.imgUrl }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </TouchableOpacity>
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
    backgroundColor: '#007BFF',
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
