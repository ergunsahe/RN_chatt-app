import React, {useState} from "react"
import {View, Text, KeyboardAvoidingView, Alert, Animated, Easing} from "react-native"

import auth from '@react-native-firebase/auth';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Input, Button, } from "../components"
import checkErrors from "./functions"

import {icon, } from "./style"
import { ScrollView } from "react-native-gesture-handler";





const spinValue = new Animated.Value(0);
Animated.timing(
    spinValue,
  {
    toValue: 100,
    duration: 1000 * 3000 ,
    easing: Easing.linear, 
    useNativeDriver: true  
  }
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
const Login= (props) =>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    
    

    const login = async () =>{
        try {
            if (email==="" || password==="") {
              Alert.alert("ClarusChat", checkErrors("auth/null-value"))
            } else {
              await auth().signInWithEmailAndPassword(email, password)
              
              props.navigation.navigate("Timeline")
            } 
           
          } catch (err) {
            Alert.alert("ClarusChat", checkErrors(err.code))
          }
    }
        
    return(
        <View style={{flex:1, backgroundColor:"#f8e6cb"}}>
            <KeyboardAvoidingView style={{flex:1}}>
                <ScrollView>

                    <View style={{flex:1, }}>
                        <Animated.View style={{transform: [{rotate: spin}] }}>
                            <Icon style={icon.container} name="ac-unit" size={250}/>
                        </Animated.View>
                        <Text style={icon.banner}>ClarusChat</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Input
                            placeholder="Enter your email.."
                            onText={setEmail}
                            keyboardType="email-address"
                        />
                        <Input
                            placeholder="Enter your password.."
                            onText={setPassword}
                            secureTextEntry={true}

                        />
                    </View>
                    <View style={{flex:1}}>
                        <Button
                            title="Sign in"
                            backStyle={true}
                            onPress={() =>login()}
                        />
                        <Button
                            title="Sign up"
                            onPress={() =>props.navigation.navigate("Sign")}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export {Login};