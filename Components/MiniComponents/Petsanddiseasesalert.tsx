import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

// Sample data for the grid (Pets and Diseases alerts)
const alerts = [
  { id: '1', title: 'Aphid Infestation' },
  { id: '2', title: 'Fungal Disease' },
  { id: '3', title: 'Nematode Alert' },
  { id: '4', title: 'Bacterial Wilt' },
  { id: '5', title: 'Spider Mite' },
  { id: '6', title: 'Stem Borer' },
];

const Petsanddiseasesalert = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pests and Diseases Alert</Text>

      {/* Grid of alerts */}
      <FlatList
        data={alerts}
        numColumns={2} // Create 2 columns
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Text style={styles.gridText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Petsanddiseasesalert

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds shadow effect for Android
  },
  gridText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
