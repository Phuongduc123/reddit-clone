import {StyleSheet} from 'react-native';
import {widthScreen, heightScreen} from '../../consts/consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    height: heightScreen * 1.2,
    // resizeMode: 'cover',
    // justifyContent: 'center',
  },
  avatar:{
    marginTop: heightScreen * 0.1,
    marginBottom: -widthScreen*0.08,
    zIndex:2,
    marginLeft:widthScreen*0.05
  },
  avataImage: {
    // position:"relative",
    // width:10,
    // backgroundPosition: 'top center',
    // resizeMode: 'contain',
    height: widthScreen * 0.175,
    width: widthScreen *0.175,
    borderRadius:50,
    // justifyContent:"center"
    // marginTop:
    // margin:"auto"
  },
  introBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingTop: widthScreen*0.08,
    paddingBottom: widthScreen*0.08,
    paddingLeft:widthScreen*0.02,
    paddingRight:widthScreen*0.02,
  },
  rowNameAndNotification:{
      display:'flex',
      flexDirection:"row",
      alignItems:"center"
  },
  nameText:{
    flex:7,
    width:100,
  },
  textName:{
    fontFamily: 'Roboto-Bold',
    fontSize:16,
    marginLeft:20,
  },   
  iconNoti:{
      resizeMode:'contain',
      height:widthScreen * 0.04
  },
  SubFrame:{
      padding:4,
      borderColor:"black",
      borderWidth:0.6,
      borderRadius:10,
  },
  introContent:{
      paddingLeft:widthScreen*0.04,
      paddingRight:widthScreen*0.04,
      marginTop:10,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
  },
  introText:{
      textAlign:"justify"
  },
  utilityBar:{
    shadowColor: "#000",
    display:"flex",
    flexDirection:'row',
    padding:widthScreen*0.04,
    backgroundColor:"rgba(255, 253, 253, 0.34)",
    shadowOpacity: 0.27,
    elevation: 1,
    textAlign:"center",
    justifyContent:"space-between"
  },
  collapPost:{
    display:"flex",
    flexDirection:'row',
    // flex:7
    // width:widthScreen*0.1
  },
  iconPost:{
    resizeMode:'contain',
    height:widthScreen * 0.05,
    width:widthScreen* 0.05
  },
  iconCollapse:{
    resizeMode:'contain',
    height:widthScreen * 0.06,
    width:widthScreen* 0.06
  },
  iconLayoutType:{
    resizeMode:'contain',
    height:widthScreen * 0.06,
    width:widthScreen* 0.06
  },
  textPost:{
      marginLeft:8,
      fontSize:16
  },
  PostsContent:{
      backgroundColor:"#E5E5E5",
      flex:1,
      marginBottom:150
      // justifyContent: 'center',
      // alignItems: 'center',
      // overflow:"scroll"
      // flexGrow:0,
  },
  PostsList:{
    // flexGrow:1,
    // height: 50,
    // flex:1,
    // overflow:"scroll"
  }
  
});

export default styles;
