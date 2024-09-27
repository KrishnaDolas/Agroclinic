import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you are using FontAwesome for icons
import { Picker } from '@react-native-picker/picker'; // For dropdown

const FertilizerCalculator = () => {
  const [crop, setCrop] = useState('Soybean'); // Dropdown state
  const [unit, setUnit] = useState('Acre'); // Unit state
  const [plotSize, setPlotSize] = useState(0); // Plot size state

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} />
        <Text style={styles.headerText}>Fertilizer Calculator</Text>
      </View>

      {/* Crop Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>See relevant information on</Text>
        <Picker
          selectedValue={crop}
          style={styles.picker}
          onValueChange={(itemValue) => setCrop(itemValue)}
        >
          <Picker.Item label="Soybean" value="Soybean" />
          {/* Add more crop options here */}
        </Picker>
      </View>

      {/* Nutrient Quantities */}
      <View style={styles.nutrientContainer}>
        <Text style={styles.label}>Nutrient quantities</Text>
        <View style={styles.nutrientValues}>
          <Text style={styles.nutrientText}>N:25</Text>
          <Text style={styles.nutrientText}>P:55</Text>
          <Text style={styles.nutrientText}>K:17</Text>
        </View>
        <Text style={styles.editText}>Edit</Text>
      </View>

      {/* Unit Selection */}
      <View style={styles.unitContainer}>
        <Text style={styles.label}>Unit</Text>
        <View style={styles.unitOptions}>
          <TouchableOpacity onPress={() => setUnit('Acre')} style={styles.unitOption}>
            <Text style={unit === 'Acre' ? styles.unitSelected : styles.unitText}>Acre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setUnit('Hectare')} style={styles.unitOption}>
            <Text style={unit === 'Hectare' ? styles.unitSelected : styles.unitText}>Hectare</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setUnit('Gunta')} style={styles.unitOption}>
            <Text style={unit === 'Gunta' ? styles.unitSelected : styles.unitText}>Gunta</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Plot Size */}
      <View style={styles.plotSizeContainer}>
        <Text style={styles.label}>Plot size</Text>
        <Text style={styles.plotSizeNote}>Sizes smaller than one unit are expressed as 0.</Text>
        <Text style={styles.plotSizeExample}>Example: half acre = 0.5</Text>
        <View style={styles.plotSizeInputContainer}>
          <TouchableOpacity onPress={() => setPlotSize(Math.max(plotSize - 0.1, 0))}>
            <Icon name="minus" size={30} />
          </TouchableOpacity>
          <TextInput
            style={styles.plotSizeInput}
            keyboardType="numeric"
            value={plotSize.toString()}
            onChangeText={(value) => setPlotSize(parseFloat(value))}
          />
          <TouchableOpacity onPress={() => setPlotSize(plotSize + 0.1)}>
            <Icon name="plus" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.calculateButton}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FertilizerCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dropdownContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  nutrientContainer: {
    marginVertical: 15,
  },
  nutrientValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nutrientText: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  editText: {
    color: '#1E90FF',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  unitContainer: {
    marginVertical: 15,
  },
  unitOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unitOption: {
    padding: 10,
  },
  unitText: {
    fontSize: 16,
    color: '#000',
  },
  unitSelected: {
    fontSize: 16,
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  plotSizeContainer: {
    marginVertical: 15,
  },
  plotSizeNote: {
    fontSize: 12,
    color: '#555',
  },
  plotSizeExample: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  plotSizeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plotSizeInput: {
    fontSize: 16,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 20,
    width: 100,
  },
  calculateButton: {
    marginTop: 30,
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  calculateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
