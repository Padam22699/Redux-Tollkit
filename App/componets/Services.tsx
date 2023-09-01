import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {White} from '../Colors/Colors';

interface Services {
  id: string;
  image: string;
  name: string;
}

const Services: React.FC = () => {
  const services: Services[] = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/3003/3003984.png',
      name: 'Washing',
    },
    {
      id: '1',
      image: 'https://cdn-icons-png.flaticon.com/128/2975/2975175.png',
      name: 'Laundry',
    },
    {
      id: '2',
      image: 'https://cdn-icons-png.flaticon.com/128/9753/9753675.png',
      name: 'Wash & Iron',
    },
    {
      id: '3',
      image: 'https://cdn-icons-png.flaticon.com/128/995/995016.png',
      name: 'Cleaning',
    },
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((item, index) => (
          <Pressable
            key={index}
            style={{
              margin: 10,
              alignItems: 'center',
              backgroundColor: White,
              padding: 15,
              borderRadius: 10,
            }}>
            <Image source={{uri: item.image}} style={{width: 70, height: 70}} />
            <Text style={{marginTop:10 ,}}>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
