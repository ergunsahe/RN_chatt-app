import moment from  "moment";
import React from"react";
import {Text, View} from "react-native";
import {postitem} from './style';
const PostItem = (props) =>{
    return(
        <View style={postitem.container}>
            <View style={postitem.headerContainer}>
                <Text style={postitem.username}>{props.post.userMail.split('@')[0]} </Text>
                <Text style={postitem.time}>
                    {moment
                        .duration(
                            moment(props.post.time).diff(moment(new Date()), "seconds"),
                            "seconds",
                        )
                        .humanize(true)

                    } 
                </Text>
            </View>
            <View>
                <Text style={postitem.bodyContainer}>{props.post.postText}</Text>
            </View>
        </View>
    )
}

export {PostItem}