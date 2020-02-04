import React from 'react';
import {View, Image, StyleSheet, SafeAreaView,Text,  } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


export const ProductList = ()=> {
    return(

        <SafeAreaView style={styles.pageStyle}>
            <ScrollView>
               <View style={styles.header}>
                    <View>
                        <Image source={require('../../assets/product/menu.png')} />
                    </View>
                    <View>
                        <Image source={require('../../assets/product/nike.png')} />
                    </View>
                    <View style={styles.header2}>
                        <Image source={require('../../assets/product/bookmark.png')} />
                        <Image source={require('../../assets/product/app.png')} />
                    </View>
               </View>

               <View style={styles.pageTitle}>
                   <Text>Discover your</Text>
                   <Text style={styles.textTitle}>Favourite Footwear</Text>
               </View>

               <View style={styles.searchIcon} >
                   <Image source={require('../../assets/product/search.png')} style={{paddingLeft:5,}} />
                   <TextInput style={{flex: 1,}} placeholder="Search shoes.."  style={styles.searchBar}/>
               </View>
            </ScrollView>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    pageStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        backgroundColor: '#f9f9f9',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    header2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexBasis: '18%',
    },
    pageTitle: {
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
    },

    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    searchIcon: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderRadius: 5 ,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        
    },
    searchBar: {
        paddingLeft: 5,
    }
    
  
    

})