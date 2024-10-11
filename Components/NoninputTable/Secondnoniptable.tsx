import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';

type Unit = 'ekar' | 'hector' | 'gunta';

interface WeeklyCalculation {
  urea: string;
  ureaBags: string;
  npk: string;
  npkBags: string;
}

const Secondnoniptable: React.FC = () => {
  const [landValue, setLandValue] = useState<string>('1.0');
  const [selectedUnit, setSelectedUnit] = useState<Unit>('ekar');
  const [totalUrea, setTotalUrea] = useState<string>('0.00');
  const [totalNPK, setTotalNPK] = useState<string>('0.00');
  const [weeklyValues, setWeeklyValues] = useState<WeeklyCalculation[]>(
    Array(4).fill({ urea: '0.00', ureaBags: '0.00', npk: '0.00', npkBags: '0.00' })
  );

  const unitValues: Record<Unit, { n: number; p: number; k: number }> = {
    ekar: { n: 200.0, p: 80.0, k: 80.0 },
    hector: { n: 500.0, p: 200.0, k: 200.0 },
    gunta: { n: 5.0, p: 2.0, k: 2.0 },
  };

  useEffect(() => {
    calculateValues(parseFloat(landValue), selectedUnit);
  }, [landValue, selectedUnit]);

  const handleUnitChange = (unit: Unit) => {
    setSelectedUnit(unit);
    calculateValues(parseFloat(landValue), unit);
  };

  const handleLandValueChange = (text: string) => {
    const value = parseFloat(text);
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      setLandValue(text);
      calculateValues(value, selectedUnit);
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid number between 0 and 1000.');
    }
  };

  const resetValues = () => {
    setLandValue('1.0');
    calculateValues(1.0, selectedUnit);
  };

  const calculateValues = (value: number, unit: Unit) => {
    const { n, p, k } = unitValues[unit];

    // Calculate required amounts of 10:26:26
    const requiredPK = p * value; // Total required P and K
    const total10_26_26 = (requiredPK * 100) / 26; // Amount of 10:26:26 needed

    // Round up the total 10:26:26
    const roundedTotal10_26_26 = Math.ceil(total10_26_26);

    // Calculate N from 10:26:26
    const nFrom10_26_26 = (10 / 100) * roundedTotal10_26_26; 
    
    // Calculate total N required
    const totalNRequired = n * value; // Total required N
    const remainingN = Math.max(totalNRequired - nFrom10_26_26, 0); // Remaining N needed from Urea

    // Calculate Urea needed
    const ureaNeeded = (remainingN * 100) / 46; // 46 kg N from 100 kg Urea

    setTotalUrea(ureaNeeded.toFixed(2));
    setTotalNPK(roundedTotal10_26_26.toFixed(2));

    // Calculate weekly doses
    calculateWeeklyDoses(roundedTotal10_26_26, totalNRequired);
  };

  const calculateWeeklyDoses = (totalNPK: number, totalNRequired: number) => {
    const weeklyCalculations: WeeklyCalculation[] = [];
  
    // Week 1
    calculateFirstWeekDoses(totalNPK, totalNRequired, weeklyCalculations);
  
    // Week 2
    calculateSecondWeekDoses(totalNRequired, weeklyCalculations);
  
    // Week 3
    calculateThirdWeekDoses(totalNRequired, weeklyCalculations);
  
    // Week 4
    calculateFourthWeekDoses(totalNPK, totalNRequired, weeklyCalculations);
  
    // Update weekly values
    setWeeklyValues(weeklyCalculations);
  };
  
  const calculateFirstWeekDoses = (totalNPK: number, totalNRequired: number, weeklyCalculations: WeeklyCalculation[]) => {
    const pkAmount = totalNPK / 2; // 50% for first week
    const pAmount = pkAmount * 0.5; // 50% P
    const kAmount = pkAmount * 0.5; // 50% K
    const nFromPK = (10 / 100) * pkAmount; // N from 10:26:26
  
    const requiredN = totalNRequired * 0.1; // 10% N needed
    const remainingN = Math.max(requiredN - nFromPK, 0); // Remaining N needed from Urea
    const ureaNeeded = (remainingN * 100) / 46; // kg of urea needed
  
    weeklyCalculations.push({
      urea: ureaNeeded.toFixed(2),
      ureaBags: (ureaNeeded / 50).toFixed(2),
      npk: pkAmount.toFixed(2),
      npkBags: (pkAmount / 100).toFixed(2),
    });
  };
  
  const calculateSecondWeekDoses = (totalNRequired: number, weeklyCalculations: WeeklyCalculation[]) => {
    const nRequired = totalNRequired * 0.4; // 40% N
    const ureaNeeded = (nRequired * 100) / 46; // kg of urea needed
  
    weeklyCalculations.push({
      urea: ureaNeeded.toFixed(2),
      ureaBags: (ureaNeeded / 50).toFixed(2),
      npk: (0).toFixed(2),
      npkBags: (0).toFixed(2),
    });
  };
  
  const calculateThirdWeekDoses = (totalNRequired: number, weeklyCalculations: WeeklyCalculation[]) => {
    const nRequired = totalNRequired * 0.1; // 10% N
    const ureaNeeded = (nRequired * 100) / 46; // kg of urea needed
  
    weeklyCalculations.push({
      urea: ureaNeeded.toFixed(2),
      ureaBags: (ureaNeeded / 50).toFixed(2),
      npk: (0).toFixed(2),
      npkBags: (0).toFixed(2),
    });
  };
  
  const calculateFourthWeekDoses = (totalNPK: number, totalNRequired: number, weeklyCalculations: WeeklyCalculation[]) => {
    const pkAmount = totalNPK / 2; // 50% for the fourth week
    const pAmount = pkAmount * 0.5; // 50% P
    const kAmount = pkAmount * 0.5; // 50% K
  
    const nFromPK = (10 / 100) * pkAmount; // N from 10:26:26
    const requiredN = totalNRequired * 0.4; // 40% N
    const remainingN = Math.max(requiredN - nFromPK, 0); // Remaining N needed from Urea
    const ureaNeeded = (remainingN * 100) / 46; // kg of urea needed
  
    weeklyCalculations.push({
      urea: ureaNeeded.toFixed(2),
      ureaBags: (ureaNeeded / 50).toFixed(2),
      npk: pkAmount.toFixed(2),
      npkBags: (pkAmount / 100).toFixed(2),
    });
  };
  const adjustLandValue = (adjustment: number) => {
    const currentValue = parseFloat(landValue);
    if (currentValue + adjustment >= 0) {
      const newValue = (currentValue + adjustment).toFixed(1);
      setLandValue(newValue);
      calculateValues(parseFloat(newValue), selectedUnit);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>रासायनिक खतांसाठी लागणारा गणिती ताळा</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>धारणा:</Text>
        <View style={styles.radioGroup}>
          {(['ekar', 'hector', 'gunta'] as Unit[]).map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[styles.radioButton, selectedUnit === unit && styles.selectedRadioButton]}
              onPress={() => handleUnitChange(unit)}
            >
              <Text style={[styles.radioButtonText, selectedUnit === unit && styles.selectedRadioButtonText]}>
                {unit === 'ekar' ? 'एकर' : unit === 'hector' ? 'हेक्टर' : 'गुंठा'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>उसाच्या क्षेत्राचे मोज माप:</Text>
        <View style={styles.inputRow}>
          <TouchableOpacity style={styles.adjustButton} onPress={() => adjustLandValue(-0.5)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={landValue}
            onChangeText={handleLandValueChange}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.adjustButton} onPress={() => adjustLandValue(0.5)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.unitText}>{selectedUnit}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Fertilizer Required</Text>
        <Text style={styles.value}>Total Urea: {totalUrea} किलो</Text>
        <Text style={styles.value}>Total 10:26:26: {totalNPK} किलो</Text>
      </View>

      {['पहिला हफ्ता', 'दुसरा हफ्ता', 'तिसरा हफ्ता', 'चौथा हफ्ता'].map((weekLabel, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{weekLabel}</Text>
          <Text style={styles.value}>Urea: {weeklyValues[index].urea} किलो ({weeklyValues[index].ureaBags} बैग)</Text>
          <Text style={styles.value}>10:26:26 : {weeklyValues[index].npk} किलो ({weeklyValues[index].npkBags} बैग)</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.resetButton} onPress={resetValues}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
  },
  adjustButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  unitText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedRadioButton: {
    backgroundColor: '#007bff',
  },
  radioButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedRadioButtonText: {
    color: '#fff',
  },
  value: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#007bff',
  },
  resetButton: {
    backgroundColor: '#dc3545',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Secondnoniptable;