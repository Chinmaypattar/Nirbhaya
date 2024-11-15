import { Text, SafeAreaView, Image, View, StyleSheet, TextInput, TouchableOpacity, LogBox } from "react-native";
import logo from "../Assets/Logo/Logo.png"
import { colorList } from "../Utils/ColorList";
import InputBox from "../components/InputBox";
import { useState } from "react";
import Icon from "react-native-vector-icons/Fontisto"
import { IS_FLOW_DONE, SIGN_UP } from "../Utils/Constants";
import { postAPICall } from "../Utils/apiMethods";
import { saveAsyncData } from "../Utils/Common";
import OverLayLoader from "../components/OverLayLoader";

export default function SignUp(props) {
    const [userName, setUserName] = useState("")
    const [nameErr, setNameErr] = useState("")

    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneErr, setPhoneErr] = useState("")
    const [loader, setLoader] = useState(false)

    const validatePassword = (password) => {
        if (!password) {
            setPasswordErr("Please enter your password");
            return false;
        } else if (password.length < 8) {
            setPasswordErr("Password must be at least 8 characters long");
            return false;
        } else {
            setPasswordErr("");
            return true;
        }
    };

    const validatePhoneNumber = (phoneNumber) => {
        if (!phoneNumber) {
            setPhoneErr("Please enter your phone number");
            return false;
        } else if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
            setPhoneErr("Please enter a valid phone number.");
            return false;
        } else {
            setPhoneErr("");
            return true;
        }
    };

    const validateName = (name) => {
        
        if (!name) {
            setNameErr("Please enter your name");
            return false;
        } else {
            setNameErr("");
            return true;
        }
    };


    const onSubmit = async () => {
        const isPasswordValid = validatePassword(password);
        const isPhoneNumberValid = validatePhoneNumber(phone);
        const isNameValid = validateName(userName);

        if (isPasswordValid && isPhoneNumberValid && isNameValid) {
            
                setLoader(true)
                const reqObj = {
                    "username": userName,
                    "phonenumber": phone,
                    "password": password
                }

                await onSignUp(reqObj)
           
        }
    };

    const onSignUp = async (req) => {

        try {
            const res = await postAPICall(SIGN_UP, req)
            if (res) {
                saveAsyncData(IS_FLOW_DONE,false )
                props.navigation.replace("EmergencyContactDetails")
            }
            console.log(res)

        } catch (err) {
            console.log("Sign-up",err.message);
            // showErrToast(err.message ? err.message :"Something went wrong")

        }
        setLoader(false)
    }
    return (
        <SafeAreaView style={styles.bgWrapper}>
            {loader &&(
                <OverLayLoader/>
            )}
            <View style={styles.appLogoView}>
                <Image source={logo} style={styles.appLogoImage} resizeMode="contain"></Image>
                <Text style={styles.textStyle}>NIRBHAVA</Text>

            </View>
            <View style={styles.textView}>
                <InputBox text={userName} isError={false} errMsg={nameErr} type="userName" onChangeText={(txt) => setUserName(txt)} />
                {/* <InputBox isError={false} errMsg={emailErr} type="email" onChangeText={(txt) => setEmail(txt)} /> */}


                <InputBox text={phone} isError={false} errMsg={phoneErr} type="phone" onChangeText={(txt) => setPhone(txt)} />
                <InputBox text={password} isError={false} errMsg={passwordErr} type="password" onChangeText={(txt) => setPassword(txt)} />
            </View>

            <View style={{ alignItems: "center", flex: 1 }}>
                <TouchableOpacity style={styles.subBtn} activeOpacity={0.7} onPress={()=>onSubmit()}>
                    <Text style={styles.subTxt}>Next</Text>
                    <Icon name={'arrow-right-l'} size={20} color="white" />

                </TouchableOpacity>

            </View>

            <View style={{ justifyContent: "flex-end", marginBottom: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 13 }}>Already have an account?</Text>
                    <Text style={{ color: "#37c59c", fontWeight: "bold", fontSize: 13, marginLeft: 6 }} onPress={() => props.navigation.push("Login")}>SIGN IN</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1,
        backgroundColor: colorList.appBgColor
    },
    appLogoView: {
        alignItems: "center",
        marginTop: 30,
    },
    appLogoImage: {
        height: 60
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 21,
    },
    textView: {
        padding: 50,
        marginTop: 50,
        flex: 1
    },
    subBtn: {
        backgroundColor: "#e0afcc", borderRadius: 19, padding: 10, marginTop: 50, width: "70%",flexDirection:"row",justifyContent:'center',alignItems:"center"
    },
    subTxt: {
        color: "#ffffff", textAlign: "center", fontSize: 18, fontWeight: "bold",marginRight:10
    },
}) 