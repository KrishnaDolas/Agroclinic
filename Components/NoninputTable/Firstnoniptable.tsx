import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

type Unit = 'ekar' | 'hector' | 'gunta';
type Week = 'week1' | 'week2' | 'week3' | 'week4';

interface WeeklyValues {
  urea: Record<Week, number>;
  ssf: Record<Week, number>;
  mop: Record<Week, number>;
}

const Firstnoniptable = () => {
  const [landValue, setLandValue] = useState<number>(0);
  const [selectedUnit, setSelectedUnit] = useState<Unit>('ekar');

  // Total and Weekly values for fertilizers
  const [totalValues, setTotalValues] = useState({ urea: 0, ssf: 0, mop: 0 });
  const [weeklyValues, setWeeklyValues] = useState<WeeklyValues>({
    urea: { week1: 0, week2: 0, week3: 0, week4: 0 },
    ssf: { week1: 0, week2: 0, week3: 0, week4: 0 },
    mop: { week1: 0, week2: 0, week3: 0, week4: 0 },
  });

  const handleUnitChange = (unit: Unit) => {
    setSelectedUnit(unit);
    setLandValue(0);
    resetValues();
  };

  const handleLandValueChange = (text: string) => {
    const value = parseFloat(text);
    if (!isNaN(value) && value >= 0) {
      setLandValue(value);
      calculateValues(value, selectedUnit);
    } else {
      setLandValue(0);
      resetValues(); // Reset values if input is invalid
    }
  };

  const resetValues = () => {
    setTotalValues({ urea: 0, ssf: 0, mop: 0 });
    setWeeklyValues({
      urea: { week1: 0, week2: 0, week3: 0, week4: 0 },
      ssf: { week1: 0, week2: 0, week3: 0, week4: 0 },
      mop: { week1: 0, week2: 0, week3: 0, week4: 0 },
    });
  };

  const calculateValues = (value: number, unit: Unit) => {
    let ureaTotal: number, ssfTotal: number, mopTotal: number;

    switch (unit) {
      case 'ekar':
        ureaTotal = (200 * value * 100) / 46.0; // Urea for 1 Ekar
        ssfTotal = (80 * value * 100) / 16.0;  // SSF for 1 Ekar
        mopTotal = (80 * value * 100) / 60.0;   // MOP for 1 Ekar
        break;
      case 'hector':
        ureaTotal = (500 * value * 100) / 46.0; // Urea for 1 Hector
        ssfTotal = (200 * value * 100) / 16.0;  // SSF for 1 Hector
        mopTotal = (200 * value * 100) / 60.0;   // MOP for 1 Hector
        break;
      case 'gunta':
        ureaTotal = (10 * value * 434) / 40.0;  // Urea for 1 Gunta
        ssfTotal = (10 * value * 500) / 40.0;   // SSF for 1 Gunta
        mopTotal = (10 * value * 133) / 40.0;    // MOP for 1 Gunta
        break;
      default:
        return;
    }

    // Set total values
    setTotalValues({
      urea: parseFloat(ureaTotal.toFixed(2)),
      ssf: parseFloat(ssfTotal.toFixed(2)),
      mop: parseFloat(mopTotal.toFixed(2)),
    });

    // Set weekly values based on the calculated percentages
    setWeeklyValues({
      urea: {
        week1: parseFloat((ureaTotal * 0.10).toFixed(2)), // 10% for week1
        week2: parseFloat((ureaTotal * 0.40).toFixed(2)), // 40% for week2
        week3: parseFloat((ureaTotal * 0.10).toFixed(2)), // 10% for week3
        week4: parseFloat((ureaTotal * 0.40).toFixed(2)), // 40% for week4
      },
      ssf: {
        week1: parseFloat((ssfTotal * 0.50).toFixed(2)),  // 50% for week1
        week2: 0,                                         // 0% for week2
        week3: 0,                                         // 0% for week3
        week4: parseFloat((ssfTotal * 0.50).toFixed(2)),  // 50% for week4
      },
      mop: {
        week1: parseFloat((mopTotal * 0.50).toFixed(2)),  // 50% for week1
        week2: 0,                                         // 0% for week2
        week3: 0,                                         // 0% for week3
        week4: parseFloat((mopTotal * 0.50).toFixed(2)),  // 50% for week4
      },
    });
  };

  const increaseValue = () => {
    const newLandValue = landValue + 0.5;
    setLandValue(newLandValue);
    calculateValues(newLandValue, selectedUnit);
  };

  const decreaseValue = () => {
    if (landValue > 0) {
      const newLandValue = Math.max(0, landValue - 0.5);
      setLandValue(newLandValue);
      calculateValues(newLandValue, selectedUnit);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>आडसाली उस एकरी रासायनिक खतांच्या मात्रा (किलो मध्ये)</Text>
        <View style={styles.radioGroup}>
          {(['ekar', 'hector', 'gunta'] as Unit[]).map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[styles.radioButton, selectedUnit === unit && styles.selectedRadioButton]}
              onPress={() => handleUnitChange(unit)}
            >
              <Text style={styles.radioButtonText}>
                {unit === 'ekar' ? 'एकर' : unit === 'hector' ? 'हेक्टर' : 'गुंठा'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Displaying the "Annadravyache Praman" next to unit selection */}
        <Text style={styles.annadravyachePraman}>
          {selectedUnit === 'ekar' ? '200 Kg N / 80 Kg P / 80 Kg K' : 
          selectedUnit === 'hector' ? '500 Kg N / 200 Kg P / 200 Kg K' : 
          '10 Kg N / 20 Kg P / 20 Kg K'}
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>उसाच्या क्षेत्राचे मोज माप</Text>
          <View style={styles.inputRow}>
            <TouchableOpacity style={styles.minusButton} onPress={decreaseValue}>
              <Text style={styles.minusButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={landValue.toString()}
              onChangeText={handleLandValueChange}
              keyboardType="decimal-pad"
            />
            <TouchableOpacity style={styles.plusButton} onPress={increaseValue}>
              <Text style={styles.plusButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>{selectedUnit}</Text>
        </View>
      </View>

      {/* Display Total Fertilizer Values */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Total Fertilizer Required</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Total Urea:</Text>
          <Text style={styles.value}>{totalValues.urea} किलो</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total SSF:</Text>
          <Text style={styles.value}>{totalValues.ssf} किलो</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total MOP:</Text>
          <Text style={styles.value}>{totalValues.mop} किलो</Text>
        </View>
      </View>

      {/* Weekly Breakdown */}
      {['पहिला हफ्ता', 'दुसरा हफ्ता', 'तिसरा हफ्ता', 'चौथा हफ्ता'].map((weekLabel, index) => (
        <View key={index} style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{weekLabel}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>यूरीया</Text>
            <Text style={styles.value}>
              {Object.values(weeklyValues.urea)[index].toFixed(2)} किलो
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>सिंगल सुपर फॉस्फेट</Text>
            <Text style={styles.value}>
              {Object.values(weeklyValues.ssf)[index].toFixed(2)} किलो
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>म्युरेट ऑफ पोटॅश</Text>
            <Text style={styles.value}>
              {Object.values(weeklyValues.mop)[index].toFixed(2)} किलो
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  radioButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  selectedRadioButton: {
    backgroundColor: '#D4A373',
  },
  radioButtonText: {
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '40%',
    marginHorizontal: 10,
    textAlign: 'center',
    borderRadius: 8,
  },
  minusButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  minusButtonText: {
    fontSize: 18,
  },
  plusButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  plusButtonText: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  annadravyachePraman: {
    fontSize: 16,
    marginTop: 8,
    color: '#333',
  },
});

export default Firstnoniptable;
