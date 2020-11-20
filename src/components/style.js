import {StyleSheet, Dimensions} from "react-native"

export const input= StyleSheet.create({
    container:{
        padding:5,
        margin:10,
        backgroundColor:"#e0e0e0",
        borderRadius:10
    }
})

export const button = StyleSheet.create({
    container:{
        padding:15,
        margin:20,
        marginHorizontal:40,
        backgroundColor:"#fb8c6f",
        borderRadius:10,
        alignItems:"center"
    },
    noGround:{
        padding:15,
        margin:20,
        marginHorizontal:40,
        
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"#73607d"
    }
})



export  const panel=StyleSheet.create({
    main:{
        flex:1,
        borderBottomWidth:3,
        borderBottomColor:"#bdbdbd"
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    panelIcon:{
        flexDirection:"row",
    },
    sharp:{
        fontSize:40,
        fontWeight:"bold",
        color:"#3196e2"
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        color:"#ff826c"
    }
})



export const post_input = StyleSheet.create({
    container: {
       width: Dimensions.get('window').width * 0.9,
       alignSelf: 'center',
       bottom: 10,
       position: 'absolute',
       backgroundColor: '#e0e0e0',
       borderRadius: 5,
       padding: 5,
       flexDirection: 'row',
       borderWidth: 1,
       borderColor: "#b0bec5"
    },  
    inputContainer: {
       flex: 1,
    },
    button: {
 
    }
 });

 export const topicModal = StyleSheet.create({
    modal: {
      margin: 0,
      justifyContent: 'flex-end',
      padding: 0,
      paddingHorizontal: 10
    },  
    container: {
      paddingTop: 5,
      backgroundColor: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    topicItemContainer: {
       padding: 10,
    },  
    topicItemText: {
       fontSize: 20,
       fontWeight: 'bold',
       color: '#78909c'
    },  
  });

  export const postitem = StyleSheet.create({
    container: {
      marginVertical: 10,
      backgroundColor: '#ffcdaa',
    },
    headerContainer: {
      padding: 5,
      backgroundColor: '#ee8980',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    username: {
      fontWeight: 'bold',
      color: 'white',
    },
    bodyContainer: {
       padding: 5
    },
    time: {
      color: 'white',
      fontStyle: 'italic'
    }
  });