import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Black, Gray, Primary, White} from '../../Colors/Colors';
import ImageSlider from '../../componets/ImageSlider';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import Services from '../../componets/Services';
import Products from '../../componets/Products';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../Reducer/ProductReducer';

interface Products {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
}
const Home = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const product = useSelector((state: any) => state.product.product);
  const disptch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fatechProduct = () => {
      Product.map(services => {
        disptch(getProducts(services));
      });
    };
    fatechProduct();
    console.log('product', product);
  }, []);

  const Product: Products[] = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
      name: 'shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '11',
      image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
      name: 'T-shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '12',
      image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
      name: 'dresses',
      quantity: 0,
      price: 10,
    },
    {
      id: '13',
      image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
      name: 'jeans',
      quantity: 0,
      price: 10,
    },
    {
      id: '14',
      image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
      name: 'Sweater',
      quantity: 0,
      price: 10,
    },
    {
      id: '15',
      image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
      name: 'shorts',
      quantity: 0,
      price: 10,
    },
    {
      id: '16',
      image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
      name: 'Sleeveless',
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <ScrollView style={{flex: 1, backgroundColor: Gray}}>
      <StatusBar barStyle="default" backgroundColor={Primary} />
      <View
        style={{
          height: 80,
          backgroundColor: Primary,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assest/Img/loction.png')}
            style={{width: 30, height: 30, marginRight: 5}}
          />
          <View>
            <Text style={{color: White, fontWeight: '800', fontSize: 20}}>
              CBI Fatak{' '}
            </Text>
            <Text style={{color: White}}>Jagatpura jaipur 302017</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: White,
            padding: 5,
            borderRadius: 40,
            elevation: 10,
          }}>
          <Image
            source={require('../../Assest/Img/man.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </View>
      <View style={styles.searchbarConatiber}>
        <TextInput placeholder="Search here ..." style={{flex: 1}} />
        <TouchableOpacity>
          <Image
            source={require('../../Assest/Img/search.png')}
            style={{width: 30, height: 30, tintColor: 'red'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <ImageSlider />
      </View>
      <View style={{margin: 10}}>
        <Text style={{color: 'black', fontWeight: '500', marginBottom: 10}}>
          Availble Services
        </Text>
        <Services />
      </View>
      {product.map((item:any, index:any) => (
        <Products item={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchbarConatiber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});
