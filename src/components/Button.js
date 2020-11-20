import React from "react"
import { Text, TouchableOpacity} from "react-native"
import {button} from "./style"



const Button= ({title, onPress, backStyle}) =>{
    return(
        <TouchableOpacity 
            style={backStyle ? button.container : button.noGround} 
            onPress={onPress}
        >
            <Text style={button.text} >{title}</Text>
        </TouchableOpacity>
    )
}

export {Button};