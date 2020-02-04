import React from 'react';
import {StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, } from "@expo/vector-icons";
import {Tab} from '../../routes/tab';

export const SignUpForm =()=>{
    return(
        <View style={styles.wrapform}>

                <View style={styles.formStyle}>
                    <MaterialCommunityIcons style={styles.iconStyle} name="email" size={20} color="#b8b9bf" />
                    <TextInput placeholder="Full Name" style={{flex:1}} />
                </View>

                <View style={styles.formStyle}>
                    <MaterialCommunityIcons style={styles.iconStyle} name="email" size={20} color="#b8b9bf" />
                    <TextInput placeholder="Email address" style={{flex:1}} />
                </View>
                
                <View style={styles.formStyle}>
                    <MaterialCommunityIcons name="lock" size={20} color="#b8b9bf" style={styles.iconStyle}  />
                    <TextInput placeholder="Password" style={{flex:1}} />
                </View>

                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <View style={styles.stylingTextOrBox}>
                    <Text style={styles.LineStiling}></Text>
                    <Text style={styles.orStyle}>or</Text>
                    <Text style={styles.LineStiling}></Text>
                </View>


                <View style={styles.margingGmailAndFb}>
                    <TouchableOpacity  style={styles.acButton}>
                    <Image source={require('../../assets/signup/gooogle.png')} style={styles.socialIcon}/>
                    <Text style={styles.acText}>Gmail</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity  style={styles.acButton}>
                        <Image source={require('../../assets/signup/facebook.png')} style={styles.socialIcon}/>
                        <Text style={styles.acText}>Facebook</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.tarms}>
                        <Text>Terms & Condition</Text>
                </View>
        </View>

    )
};


export const LoginForm =()=>{
    return(

        <View style={styles.wrapform}>

                <View style={styles.formStyle}>
                    <MaterialCommunityIcons style={styles.iconStyle} name="email" size={20} color="#b8b9bf" />
                    <TextInput placeholder="Email address" style={{flex:1}} />
                </View>
                
                <View style={styles.formStyle}>
                    <MaterialCommunityIcons name="lock" size={20} color="#b8b9bf" style={styles.iconStyle}  />
                    <TextInput placeholder="Password" style={{flex:1}} />
                </View>

                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <View style={styles.stylingTextOrBox}>
                    <Text style={styles.LineStiling}></Text>
                    <Text style={styles.orStyle}>or</Text>
                    <Text style={styles.LineStiling}></Text>
                </View>


                <View style={styles.margingGmailAndFb}>
                    <TouchableOpacity  style={styles.acButton}>
                        <Image source={require('../../assets/signup/gooogle.png')} style={styles.socialIcon}/>
                        <Text style={styles.acText}>Gmail</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity  style={styles.acButton}>
                        <Image source={require('../../assets/signup/facebook.png')} style={styles.socialIcon}/>
                        <Text style={styles.acText}>Facebook</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.tarms}>
                        <Text>Terms & Condition</Text>
                </View>
        </View>

    )
};



export const SignUp = ()=>{

    const [activeTab, setActiveTab] = React.useState("login");

    return(

    <SafeAreaView style={styles.ariaStyling} >
        <ScrollView>
        <View>
            <Image style={styles.brandIcon} source={require('../../assets/signup/signup-icon.png')}  />
        </View>
        
        <View style={styles.bannerBox}>
            <Image source={require('../../assets/signup/brand-women.png')} />
        </View>


        <View>
            <View style={styles.tabBox}>
                <Tab
                    onPress={() => setActiveTab('login')}
                    activeTab={activeTab}
                    type={"login"}
                />
                <Tab
                    onPress={() => setActiveTab('signup')}
                    activeTab={activeTab}
                    type={"signup"}
                />
            </View>

            <View>
                {activeTab=='login' ? (
                    <LoginForm />
                ): (
                    <SignUpForm />
                )
                
                }
            </View>
        </View>

        

            

            
            
        </ScrollView>
            
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    wrapform: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    brandIcon: {
        height: 25.66,
        width: 53.07,
        marginTop: 32.34,
        marginLeft: 18
    },

    bannerBox: {
        flex: 1,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }, 
        
    formStyle: {
        height:53,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
       
        borderWidth: .5,
        borderColor: '#000',
        borderRadius: 5 ,
        margin: 10,
       
    },
    
     
    iconStyle: {
        padding: 10,
        margin: 5,
       
    }, acButton: {
        width: '45%',
        height: 53,
        backgroundColor:'#5780D9',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: 300,
        height: 53,
        backgroundColor:'#5780D9',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },


    text: {
        color: '#FFFFFF',
       
    },

    stylingTextOrBox: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:300,
        marginBottom: 20,

    },

    LineStiling: {
        width: '45%',
        height: 1,
        backgroundColor: '#7d7d7d',
    },

    orStyle: {
        fontSize: 15,
        color: '#282C40',
        lineHeight:15,
    },

    margingGmailAndFb: {
        flexDirection: 'row',
        width: 300,
        justifyContent:'space-between',
        backgroundColor: '#ffffff',
    },

    acButton: {
        width: '45%',
        height: 53,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#696c79',
        marginBottom: 20,
    },
    socialIcon: {
        marginLeft: 17,
    },
    acText:{
        marginLeft: 10,
    },

    stylingTab: {
        
    },

    tarms: {
        marginBottom: 20,
    },
    tabBox:{
        flexDirection: 'row',
    },

    ariaStyling: {
        backgroundColor: '#f9f9f9',
    }
    
    

})