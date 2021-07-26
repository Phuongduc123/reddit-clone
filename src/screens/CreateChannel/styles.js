import {StyleSheet} from 'react-native';
import {widthScreen, heightScreen} from '../../consts/consts';

const styles = StyleSheet.create({
  owner:{
    resizeMode:"cover",
    flexDirection:"row",
    alignItems:"center",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth:0.7,
  },
  avatar:{
    resizeMode:"cover",
    width:40,
    height:40,
    borderRadius:100,
  },
  name:{
    marginLeft:10,
  },
  nameText:{
    fontWeight:"bold",
    fontSize:15,
    color:"#212327de"
  },
  hover:{
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius:20,  
  },
  title:{
    paddingBottom:1,
    marginLeft:7,
    marginRight:7,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth:0.7,
  },
  theme:{
    paddingBottom:1,
    marginLeft:7,
    marginRight:7,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth:0.7,
  },    
  content:{
    paddingLeft:10,
    
  },
  titleInput:{
    color:'black',
  },
  contentInput:{
    textAlignVertical: 'top',
    height:200,
    color:"black"
  },
  uploadImage:{
    width: widthScreen*0.235,
    height:widthScreen*0.235,
    borderWidth:1,
    borderStyle:'dashed',
    borderColor:"#87d8f2",
    borderRadius:1,
    alignItems:"center",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center",
  },
  media:{
    marginLeft:10,
  },
  plusIconImage:{

    width:50,
    height:50,
  },
  Base64:{
    width:widthScreen*0.235,
    height:widthScreen*0.235,
    borderWidth:1,
    borderStyle:'dashed',
    borderColor:"#87d8f2",
    borderRadius:1,
    alignItems:"center",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center",
  },
  ImageBase64:{
    width:widthScreen*0.18,
    height:widthScreen*0.18,
    resizeMode:"contain"
  },
  headerStyle:{
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonPost:{
    marginRight:20,
  },
  media:{
    marginTop: 10,
    marginRight:widthScreen*0.03,
    marginLeft:widthScreen*0.03,
    paddingBottom:10,
    flexDirection:"row",
    width:"100%",
    flexWrap:"wrap",
    // flexBasis:"100%"
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth:0.7,
    
  }




  
});

export default styles;
