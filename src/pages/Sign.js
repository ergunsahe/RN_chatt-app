import React, {useState} from "react"
import {View, Text, ScrollView, Alert,} from "react-native"

import auth from '@react-native-firebase/auth';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Input, Button } from "../components"

import {icon} from "./style"



const Sign = (props) =>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [passwordRepeat, setPasswordRepeat]=useState("")

    const createAccount= async () =>{
        if (email=="" || password=="" || passwordRepeat== ""){
            Alert.alert("ClarusChat: ", "Fields cannot be empty")
            return null
        }
        if (password===passwordRepeat){
            try{
                await auth().createUserWithEmailAndPassword(email, password)
                props.navigation.navigate("Login")
            } catch (err){
                alert(err.code)
            }
        } else{
            alert("not match passwords")
        }
    }
    return(
        <View style={{flex:1, backgroundColor:"#f8e6cb"}}>
            
            <ScrollView style={{flex:1}}>
                <View >
                    <Icon style={icon.container} name="ac-unit" size={200}/>                    
                    <Text style={icon.banner}>ClarusChat</Text>
                </View>
                <View >
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
                    <Input
                        placeholder="Enter your password.."
                        onText={setPasswordRepeat}
                        secureTextEntry={true}

                    />
                </View>
                <View >
                    <Button
                        title="Create account"
                        backStyle={true}
                        onPress={() =>createAccount()}
                    />
                    <Button
                        title="Cancel"
                        onPress={() =>props.navigation.navigate("Login")}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export {Sign};