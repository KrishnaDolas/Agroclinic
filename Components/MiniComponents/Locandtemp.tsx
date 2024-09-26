import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Locandtemp = () => {
  const [location, setLocation] = useState<{ city: string; temperature: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const apiKey = 'b43378ba0d1cd8ea87bba557488050e3'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );

      const { name: city } = response.data;
      const temperature = response.data.main.temp;

      setLocation({ city, temperature });
      setLoading(false);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Unable to fetch weather data.');
      setLoading(false);
    }
  };

  const getLocation = () => {
    setLoading(true); // Set loading state when location is being fetched
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
        setError('Unable to get your location.');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const requestLocationPermission = async () => {
    try {
      let permissionStatus;

      if (Platform.OS === 'android') {
        permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      } else {
        permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      }

      if (permissionStatus === RESULTS.GRANTED) {
        console.log('Location permission granted');
        getLocation();
      } else if (permissionStatus === RESULTS.DENIED || permissionStatus === RESULTS.BLOCKED) {
        setPermissionDenied(true);
        setError('Location permission denied. Please enable it in settings.');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
      setError('An error occurred while requesting location permissions.');
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const handleRefresh = () => {
    setPermissionDenied(false); // Reset permission denied state on retry
    requestLocationPermission(); // Re-request permission and fetch location again
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (permissionDenied) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={handleRefresh} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={handleRefresh} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.city}>{location?.city}</Text>
        <Text style={styles.date}>Today, {new Date().toDateString()}</Text>
      </View>
      <View style={styles.tempContainer}>
        <Text style={styles.temp}>{location?.temperature}°C</Text>
        <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Locandtemp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 10,
  },
  locationContainer: {
    flex: 1,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  tempContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  temp: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  retryButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  refreshButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  refreshButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
