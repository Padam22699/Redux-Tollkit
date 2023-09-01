import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProduct} from './Reducer/FatchProduct';

const ThunkApiCall = () => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.product); // Access the 'data' field
  console.log(productData.loader);
  return (
    <ScrollView>
      {productData.data.length === 0 && (
        <TouchableOpacity
          onPress={() => {
            dispatch(fetchProduct());
          }}
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            padding: 10,
            backgroundColor: 'yellow',
          }}>
          <Text>ThunkApiCall</Text>
        </TouchableOpacity>
      )}
      {productData && (
        <View>
          {productData.data.map((item, index) => (
            <Text key={item.id}>
              {index + 1} => {item.title}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ThunkApiCall;

const styles = StyleSheet.create({});
