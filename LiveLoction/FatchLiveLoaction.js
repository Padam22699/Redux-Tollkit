import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native'; // Import PermissionsAndroid
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
const FatchLiveLoaction = () => {
  const requestLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // Correct typo: 'ACCESS_FINE_LOACTION' -> 'ACCESS_FINE_LOCATION'
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location'); // Correct typo: 'Loaction' -> 'Location'
      } else {
        console.log('Location permission denied'); // Correct typo: 'Loaction' -> 'Location'
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    console.log('hello');
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.warn('Error getting location:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // Increase timeout to 30 seconds
        maximumAge: 10000,
      },
    );
  };
  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          getCurrentLocation();
        }}
        style={{backgroundColor: 'grey', padding: 10}}>
        <Text>Cureent Loactio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FatchLiveLoaction;

const styles = StyleSheet.create({});
