import { Text, SafeAreaView, Image, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import logo from "../Assets/Logo/Logo.png"
import { colorList } from "../Utils/ColorList";
import InputBox from "../components/InputBox";
import { useState } from "react";
import { postAPICall } from "../Utils/apiMethods";
import { IS_FLOW_DONE, SIGN_IN } from "../Utils/Constants";
import Toast from "react-native-toast-message";
import OverLayLoader from "../components/OverLayLoader";
import { saveAsyncData } from "../Utils/Common";

export default function Login(props) {

 const [userName, setUserName] = useState("")
  const [userNameErr, setUserNameErr] = useState("")
  const [password, setPassword] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [loader, setLoader] = useState(false)


  // Validate email format
  const validateUserName = (email) => {
    if (!email) {
      setUserNameErr("Please enter your username");
      return false;
    } else {
      setUserNameErr("");
      return true;
    }
  };

  // Validate password length
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
  const onSubmit = async () => {
    const isEmailValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      setLoader(true)
      const reqObj = {
        "username": userName,
        "password": password
      }

      await onLogin(reqObj)
    }
  };

  const onLogin = async (req) => {

    try {
      const res = await postAPICall(SIGN_IN, req)
      if(res && "token" in res){
        saveAsyncData(IS_FLOW_DONE,true )
        props.navigation.replace("Home")
      }else
      console.log(res)

    } catch (err) {
      console.log(err)
      showToast()
    }
    setLoader(false)
  }
  const showToast = () => {
    Toast.show({
      type: 'error', // other options: 'error', 'info',
      text2: 'Invalid email or password',
      text2Style: { fontWeight: "bold", fontSize: 16, color: "red" }
    });
  };


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
                {/* <InputBox isError={false} errMsg={emailErr} type="email" onChangeText={(txt) => setEmail(txt)}  /> */}
                <InputBox text={userName} isError={false} errMsg={userNameErr} type="userName" onChangeText={(txt) => setUserName(txt)} />
                <InputBox text={password} isError={false} errMsg={passwordErr} type="password" onChangeText={(txt) => setPassword(txt)} />
            </View>

            <View style={{ alignItems: "center", flex:4 }}>
                <TouchableOpacity style={styles.subBtn} activeOpacity={0.7} onPress={() => onSubmit()}>
                    <Text style={styles.subTxt}>LOGIN</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={{ color: "white", marginTop: 10, fontWeight:"bold", fontSize:13 }}>Forgot Password? </Text>
                    <Text style={{ color: "#37c59c", marginTop: 10, fontWeight:"bold", fontSize:13 }}> Click Here</Text>
                </View>
            </View>

            <View style={{ justifyContent: "flex-end", marginBottom:15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: "white",fontWeight:"bold", fontSize:13 }}>Don't have an account yet?</Text>
                    <Text style={{  color: "#37c59c", fontWeight:"bold", fontSize:13, marginLeft:6}} onPress={() => props.navigation.push("SignUp")}>SIGN UP</Text>
                </View>
            </View>
            <Toast position="bottom"/>
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
    appLogoImage:{
        height:60
    },
    textStyle:{
        color:"white",
        fontWeight:"bold",
        marginTop:10,
        fontSize:21,
    },
    textView: {
        padding: 50,
        marginTop: 50,
        flex:1
    },
    subBtn: {
        backgroundColor: "#e0afcc", borderRadius: 19, padding: 10, marginTop: 50,width:"70%"
    },
    subTxt: {
        color: "#ffffff", textAlign: "center", fontSize: 18, fontWeight: "bold"
    },
}) 