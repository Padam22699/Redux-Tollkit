import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Primary} from '../../Colors/Colors';
import {Logo, Logo2} from '../../Assest/ImageConstent';

interface SlashScreenProps {
  navigation: any;
}
const SlashScreen: React.FC<SlashScreenProps> = ({navigation}) => {
  useEffect((): void => {
    setTimeout((): void => {
      navigation.navigate('Login');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={Primary} />

      <Image
        source={require('../../Assest/Gif/FrindZonLogo.gif')}
        style={styles.logo}
      />
      <Image
        source={require('../../Assest/Gif/Comminucation.gif')}
        style={[styles.logo, {width: 350}]}
      />
    </View>
  );
};

export default SlashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 60,
  },
});
