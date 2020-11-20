import React from "react"
import {View, Text, TouchableOpacity, FlatList} from "react-native"
import Modal from "react-native-modal";
import {topicModal} from "./style";



const topics=[
    "Datascience", 
    "Fullstack", 
    "Cloud Engineering", 
    "Test Engineering",
    "Gaming",
    "Random"
]


const Topic= (props) =>{
   
    return(
        <Modal
            isVisible={props.visibility}
            style={topicModal.modal}
            onBackdropPress={props.onClose}
        
        >
            <View style={topicModal.container}>
                {
                    topics.map((topic, i) =>{
                        return(
                            <TouchableOpacity
                                key={i}
                                style={topicModal.topicItemContainer}
                                onPress={() =>props.onTopicSelect(topic)}
                            >
                                <Text style={topicModal.topicItemText}>#{topic} </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </Modal>
    )
}

export {Topic};