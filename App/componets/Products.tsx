import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Gray, White} from '../Colors/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQunatity,
} from '../Reducer/CartReducer';
import {decrementQty, incrementQty} from '../Reducer/ProductReducer';

interface ProductProps {
  item: any;
  key: number;
}
const Products: React.FC<ProductProps> = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  return (
    <Pressable
      style={{
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 14,
        padding: 10,
      }}>
      <View>
        <Image source={{uri: item.image}} style={{width: 70, height: 70}} />
      </View>
      <View>
        <Text style={styles.TextColor}>{item.name}</Text>
        <Text style={{color: 'black'}}>${item.price}</Text>
      </View>
      {cart.some((c: any) => c.id === item.id) ? (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={(item: any) => {
              dispatch(incrementQunatity({id: item.id})); // Pass id property as an object
              dispatch(incrementQty(item));
            }}
            style={{
              borderColor: 'gray',
              borderWidth: 0.8,
              paddingVertical: 2,
              paddingHorizontal: 5,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
              +
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: '700',
                marginHorizontal: 5,
              }}>
              {item.quantity}
            </Text>
          </Pressable>
          <Pressable
            onPress={(item: any) => {
              dispatch(incrementQunatity(item.id)); // Pass the id
              dispatch(incrementQty(item.id)); // Pass the id
            }}
            style={{
              borderColor: 'gray',
              borderWidth: 0.8,
              paddingVertical: 2,
              paddingHorizontal: 5,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
              -
            </Text>
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={addItemToCart}>
          <Text
            style={[
              {
                color: 'green',
                borderColor: 'gray',
                borderWidth: 0.8,

                paddingVertical: 2,
                paddingHorizontal: 15,
                textAlign: 'center',
                borderRadius: 6,
                fontWeight: 'bold',
              },
            ]}>
            Add
          </Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default Products;

const styles = StyleSheet.create({
  TextColor: {
    color: 'black',
    width: 83,
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 4,
  },
});
