import {StyleSheet} from 'react-native';
import {widthScreen, heightScreen} from '../../consts/consts';

const styles = StyleSheet.create({
    header :{
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        flexDirection: 'row',
        alignItems:"center",
        // marginVertical: 30,
        marginVertical:10,
        borderBottomColor:"rgba(0,0,0,0.1)",
        borderBottomWidth:1.7,
        paddingBottom:10,

    },
    avatar: {   
        borderRadius:50,
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        width: 37,
        height:37,
        resizeMode:'cover',
        borderColor:"#4884ab",
        borderWidth:20,
        marginLeft:10,
    },
    avatarImage:{
        borderRadius:100,
        width: 35,
        height:35,
        resizeMode:'cover'
    },
    input:{
        backgroundColor:"#CCD2D7",
        marginLeft:10,
        flex:9,
        marginRight:10,
        opacity:0.6,
        color:"rgba(40, 37, 37, 0.7)",
        borderRadius:7,
        paddingLeft:5,
        paddingRight:5,
        fontFamily:'Roboto-Bold'
    },
    channelList:{
        // height:"100%",
        height: 200
    },
    channelItem:{
        // width:200,
        margin:20,
        borderColor:"rgba(0,0,0,0.1)",
        borderWidth:2,
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius:10,
        paddingBottom:20,
    },
    themeChannel:{
        backgroundColor:"#4884ab",
        height:50,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    avatarChannel:{
        borderRadius:50,
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        width: 50,
        height:50,
        resizeMode:'cover',
        borderColor:"#4884ab",
        borderWidth:20,
        marginLeft:10,
    },
    imageChannel:{
        borderRadius:100,
        width: 48,
        height:48,
        resizeMode:'cover',

    },
    channelNameText:{
        fontWeight:"bold",
    },
    channelName:{
        flexDirection:"row",
        justifyContent:"center"
    },
    channelDescription:{
        textAlign:"center",
    },
    channelDescriptionText:{
        textAlign:"center",
        padding: 10,
    },
    titleChannel:{
        marginLeft:20,
        borderBottomColor:"rgba(0,0,0,0.1)",
        borderBottomWidth:1,
        borderStyle:"solid",
        paddingBottom:10,
    }
  
});

export default styles;
