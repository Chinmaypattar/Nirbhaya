import { Text, SafeAreaView, Image, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import logo from "../Assets/Logo/Logo.png"
import { colorList } from "../Utils/ColorList";
import InputBox from "../components/InputBox";
import { useState } from "react";
import Icon from "react-native-vector-icons/Fontisto"

export default function SignUp(props) {
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    return (
        <SafeAreaView style={styles.bgWrapper}>
            <View style={styles.appLogoView}>
                <Image source={logo} style={styles.appLogoImage} resizeMode="contain"></Image>
                <Text style={styles.textStyle}>NIRBHAVA</Text>

            </View>
            <View style={styles.textView}>
                <InputBox isError={false} errMsg={emailErr} type="userName" onChangeText={(txt) => setEmail(txt)} />
                <InputBox isError={false} errMsg={emailErr} type="email" onChangeText={(txt) => setEmail(txt)} />


                <InputBox isError={false} errMsg={emailErr} type="phone" onChangeText={(txt) => setEmail(txt)} />
                <InputBox isError={false} errMsg={emailErr} type="password" onChangeText={(txt) => setEmail(txt)} />
            </View>

            <View style={{ alignItems: "center", flex: 1 }}>
                <TouchableOpacity style={styles.subBtn} activeOpacity={0.7} onPress={()=>props.navigation.replace("EmergencyContactDetails")}>
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