import React from 'react';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Locales/types';
import { StackNavigationProp } from '@react-navigation/stack';

type NoniplistNavigationProp = StackNavigationProp<RootStackParamList, 'Noniplist'>;

const Noniplist = () => {
  const navigation = useNavigation<NoniplistNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>

      <TouchableOpacity onPress={() => navigation.navigate('Firstnoniptable')}>
          <Card style={styles.card}>
            <Text style={styles.cardText}>
              आडसाली उस एकरी {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
              प्रकार 1 - सरळ खतामधून (यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
            </Text>
          </Card>
        </TouchableOpacity>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            प्रकार 2 - अडसाली ऊस लागवडीसाठी लागणारी रासायनीक खते (यूरिया + 10:26:26 ग्रेड )
          </Text>
        </Card>

        {/* Additional Cards from the image */}

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            आडसाली उस एकरी {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 3 - (१९:१९:१९, यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            आडसाली उस एकरी {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 4 - (१५:१५:१५, यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            पूर्वहंगामी उस लागवड {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 1 - सरळ खतामधून (यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            प्रकार 2 - पूर्वहंगामी उस लागवडीसाठी लागणारी रासायनिक खते (यूरिया + 10:26:26 ग्रेड)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            पूर्वहंगामी उस लागवड एकरी {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 3 - (१९:१९:१९, यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            पूर्वहंगामी उस लागवड एकरी {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 4 - (१५:१५:१५, यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            सुरू ऊस / खोडवा उस लागवड {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 1 - सरळ खतामधून (यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            प्रकार 2 - सुरू उस / खोडवा उस लागवडीसाठी लागणारी रासायनिक खते (यूरिया + 10:26:26 ग्रेड)
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardText}>
            सुरू उस / खोडवा उस लागवड {"\n"} रासायनिक खतांच्या मात्रा (किलो मध्ये) {"\n"}
            प्रकार 3 - (१९:१९:१९, यूरिया, सिंगल सुपर फॉस्फेट, म्युरेट ऑफ पोटॅश)
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    padding: 10,
    elevation: 3,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Noniplist;
