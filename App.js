import React from 'react';
import {SignUp, } from './screens/SignUp'
import {ProductList} from './screens/productList';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';



export default App  = ()=> {

  return (
    <View> 
      <ProductList />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
