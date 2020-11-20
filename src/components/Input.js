import React from "react"
import {View, TextInput} from "react-native"
import {input} from "./style"

const Input= (props) =>{
    return(
        <View style={input.container}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={(val) =>props.onText(val)}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

export {Input};