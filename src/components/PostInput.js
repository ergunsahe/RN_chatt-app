import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

import {post_input} from './style';

const PostInput = (props) => {
  const [postText, setPostText] = React.useState('');

  return (
    <View style={post_input.container}>
      <View style={post_input.inputContainer}>
        <TextInput
          multiline
          placeholder="Type something.."
          onChangeText={(value) => setPostText(value)}
        />
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => props.onSendPost(postText)}>
        <Icon name="send" size={30} color="#69007f" />
      </TouchableOpacity>
    </View>
  );
};

export {PostInput};

