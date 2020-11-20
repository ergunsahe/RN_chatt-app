import React,{useEffect,useState} from "react"
import {View,  ScrollView,  FlatList} from "react-native"

import database from '@react-native-firebase/database';
import auth from "@react-native-firebase/auth"
import moment from "moment";


import {TopicPanel, Topic, PostInput, PostItem} from "../components"



 
const Timeline= (props) =>{
    const [postDataList, setPostDataList]=useState([])
    const [topicTitle, setTopicTitle]= useState("")
    const [visibility, setVisibility]= useState(true)
   
    const onSelect=(topic) =>{
        database().ref(`${topic}`).off('value');
        setTopicTitle(topic)
        setVisibility(false)
        database()
            .ref(`${topic}`)
            .on('value', snapshot => {
                const data = snapshot.val();
                if (data){
                    const formatedData = Object.keys(data).map(key =>({...data[key]}))
                    formatedData.sort((a, b) => {
                        return new Date(b.time) - new Date(a.time);
                      });
                    setPostDataList(formatedData)
                }else{
                    return setPostDataList([])
                }
            
            }
            )
            
    }

    const sendingPost=(val) =>{
        
        const postObject = {
            userMail:auth().currentUser.email,
            postText:val,
            time:moment().toISOString(),

        }
        database().ref(`${topicTitle}`).push(postObject)
    }
    
    const renderPosts = ({item}) =>{
         return item.userMail ? <PostItem post={item}/>: null
        
    }
    return(
        <View style={{flex:1}}>
            <ScrollView >
                <TopicPanel 
                    topicName={topicTitle} 
                    onPress={() =>setVisibility(true)} 
                    onLogOut={() => auth().signOut()}
                />
            </ScrollView>

            <FlatList
                keyExtractor = {(_, i) =>i.toString()}
                data = {postDataList}
                renderItem = {renderPosts}
            
            />

            <PostInput onSendPost={sendingPost} />

            <View >
                <Topic
                    visibility={visibility}
                    onClose={() =>(topicTitle ? setVisibility(false) : null) }
                    onTopicSelect={onSelect}                
                
                />

            </View>
        </View>
    )
}

export  {Timeline};