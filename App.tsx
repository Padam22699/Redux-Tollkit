import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Auth, {MainStack} from './App/Navigation/Navigation';
import Home from './App/Screen/Main/Home';
import {Provider} from 'react-redux';
import {store} from './Src/Store/Store';
import ThunkApiCall from './Src/ThunkApiCall';
import FatchLiveLoaction from './LiveLoction/FatchLiveLoaction';
const App = (): React.JSX.Element => {
  return (
    <View>
      <Text>hello</Text>
    </View>
    // <FatchLiveLoaction />
    // <Provider store={store}>
    //   <ThunkApiCall />
    // </Provider>
  );
};

export default App;

const styles: any = StyleSheet.create({});
