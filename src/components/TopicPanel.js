import React from "react"
import {View, Text, TouchableOpacity } from "react-native"

import Icon from "react-native-vector-icons/MaterialIcons"

import {panel} from "./style"


const TopicPanel= (props) =>{
    return(
        <View style={panel.main}>
            <View style={panel.container}>
                <Text style={panel.sharp}>#</Text>
                <Text style={panel.text}>{props.topicName}</Text>
                <View style={panel.panelIcon}>
                    <TouchableOpacity
                        onPress={() =>props.onPress()}                    
                    >
                        <Icon
                            name="article" 
                            size={45}
                            color="#4f8fc0"
                        />                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                    >
                        <Icon
                            name="logout" 
                            size={45}
                            color="#53d2dc"
                            onPress={props.onLogOut}
                        />                        
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export  {TopicPanel};