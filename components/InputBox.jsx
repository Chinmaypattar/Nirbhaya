import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icon from FontAwesome
import PasswordIcon from 'react-native-vector-icons/Fontisto';

export default function InputBox({ style, onChangeText, text, label, isError, errMsg, type }) {
    return (
        <View style={{marginTop:15}}>
            {label && (
                <Text >{label}</Text>
            )}

            <View style={styles.inputContainer}>
               
                <TextInput
                    style={styles.textBox}
                    onChangeText={onChangeText}
                    value={text}
                    keyboardType={type === 'email' ? 'email-address' : type === 'phone' ? 'phone-pad' : 'default'}
                    placeholder= {type === 'email' ? 'Email' : type === 'phone' ? 'phone-pad' : type === 'password' ? 'Password' : 'Username'}
                    secureTextEntry={type == "password" ? true : false}
                    placeholderTextColor={"#a6a6a6"}
                />

                <TouchableOpacity
                    style={styles.icon}
                >
                    {
                        type === 'email' && <EmailIcon name={'email'} size={20} color="white" />
                    }
                    {
                        type === 'password' && <PasswordIcon name={'locked'} size={20} color="white" />
                    }
                </TouchableOpacity>

            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "white" }}></View>

            {/* {errMsg && errMsg !="" && (
                // <Text style={styles.errTxt}>{errMsg}</Text>
            )} */}
        </View>

    )
}

const styles = StyleSheet.create({
    textBox: {
        flex: 1,
        borderRadius: 5,
        paddingLeft: 45,
        height: 50,
        color:"#a6a6a6"
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
})
