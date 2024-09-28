import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// Define the type for the data items
type Disease = {
  id: string;
  title: string;
  type: string;
  image: string;
};

// Sample data for grid items (based on the image)
const data: Disease[] = [
  { id: '1', title: 'Cercospora Leaf Spot of Legumes', type: 'Fungus', image: 'path_to_image_1' },
  { id: '2', title: 'Anthracnose of Soybean', type: 'Fungus', image: 'path_to_image_2' },
  { id: '3', title: 'Rhizoctonia Aerial Blight', type: 'Fungus', image: 'path_to_image_3' },
  { id: '4', title: 'Purple Seed Stain of Soybean', type: 'Fungus', image: 'path_to_image_4' },
  // Add more items if needed
];

const Petsanddiseases = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Diseases By Stage</Text>
      <Text style={styles.subheader}>All pests and diseases that might appear in your crop at different stages.</Text>

      <Text style={styles.stage}>Seedling Stage</Text>

      <View style={styles.grid}>
        {data.slice(0, 4).map((item) => (
          <View key={item.id} style={styles.gridItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See More</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Diseases By Stage</Text>
      <Text style={styles.subheader}>All pests and diseases that might appear in your crop at different stages.</Text>

      <Text style={styles.stage}>Seedling Stage</Text>

      <View style={styles.grid}>
        {data.slice(0, 4).map((item) => (
          <View key={item.id} style={styles.gridItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Petsanddiseases;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  stage: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%', // Each item takes up about 45% of the screen width
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  type: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 16,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
