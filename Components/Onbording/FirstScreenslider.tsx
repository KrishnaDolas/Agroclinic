import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./src/assets/onboardScreen1.png')
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./src/assets/onboardScreen2.png')
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./src/assets/onboardScreen3.png')
  }
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor('#3498db'); // Replace with your primary color

  const buttonLabel = (label: string) => {
    return (
      <View style={{ padding: 12 }}>
        <Text style={{
          color: '#000', // Text color
          fontWeight: '600',
          fontSize: 18, // Font size
        }}>
          {label}
        </Text>
      </View>
    );
  }
  

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width: 300, // Image width
                  height: 400, // Image height
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: '#000', // Title color
                fontSize: 24, // Title font size
                marginTop: 20
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 10,
                color: '#000', // Description color
                fontSize: 16, // Description font size
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: '#3498db', // Active dot color
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page Content Goes Here</Text>
    </View>
  );
}
