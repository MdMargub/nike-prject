
import React from 'react';
import {StyleSheet, TouchableOpacity, Text } from 'react-native'

export const Tab = ({ onPress, activeTab, type }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styles.tab,
          ...(activeTab === type ? styles.tabActive : {})
        }}
      >
        <Text
          style={{
            ...styles.tabTitle,
            ...(activeTab === type ? styles.tabTitleActive : {})
          }}
        >
          {type === "login" ? "LogIn" : "SignUp"}
        </Text>
        {type === activeTab ? <Text style={styles.tabTitleBorder}>------</Text> : null}
      </TouchableOpacity>
    );
  };
   
  const styles = StyleSheet.create({
    tab: {
        flex: 1,
        
      },
    tabTitle: {
      fontSize: 16,
      textAlign: "center",
      padding: 15,
      fontWeight: "500",
      color: '#dddddd',
    },
   
    tabActive: {
      backgroundColor: '#f9f9f9',
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
      alignItems: 'center',
      

    },
    tabTitleActive: {
      color: '#666666',
      fontWeight: 'bold',
    },

    tabTitleBorderf: {
      width: 100,
      height: 10,
      backgroundColor: '#333333',
    }
  });


