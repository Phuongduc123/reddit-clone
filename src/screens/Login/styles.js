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
  logoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoImage: {
    // position:"relative",
    // width:10,
    resizeMode: 'contain',
    height: widthScreen * 0.35,
    marginTop: heightScreen * 0.1,
    // justifyContent:"center"
    // marginTop:
    // margin:"auto"
  },
  rowIntroText: {
    marginTop: heightScreen * 0.02,
    justifyContent: 'center',
  },
  introText: {
    textAlign: 'center',
    // fontWeight:'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: 'rgba(40, 37, 37, 0.7)',
  },
  usernameInput:{
    backgroundColor:"#CCD2D7",
    opacity:0.6,
    color:"rgba(40, 37, 37, 0.7)",
    display:"flex",
    marginLeft:widthScreen*0.03,
    marginRight:widthScreen*0.03,
    marginTop:heightScreen*0.07,
    borderRadius:7,
    paddingLeft:5,
    paddingRight:5,
    fontFamily:'Roboto-Bold'
  },
  passwordInput: {
    backgroundColor:"#CCD2D7",
    opacity:0.6,
    color:"rgba(40, 37, 37, 0.7)",
    display:"flex",
    marginLeft:widthScreen*0.03,
    marginRight:widthScreen*0.03,
    marginTop:heightScreen*0.035,
    borderRadius:7,
    paddingLeft:5,
    paddingRight:5,
    fontFamily:'Roboto-Bold'
  },
  accountImage:{
    position:"absolute",
    height:30,
    width:30,
    left:widthScreen*0.8,
    top:10,
    zIndex:20
  },
  lockImage:{
    position:"absolute",
    height:30,
    width:30,
    left:widthScreen*0.8,
    top:10,
    zIndex:20
  },
  notYouNnotRemPass:{
    marginTop:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:widthScreen*0.032,
    marginRight:widthScreen*0.032,
  },
  loginButton: {
    marginTop:heightScreen*0.05,
    marginLeft:widthScreen*0.3,
    marginRight:widthScreen*0.3,
    borderRadius:40
  },
  signInWidth:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"white",
    marginTop:heightScreen*0.19
  },
  googleNfacebook:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  faceImage:{
    margin:10,
    height:50,
    width:50,
  },
  googleImage:{
    margin:10,
    height:50,
    width:50,
  }
});

export default styles;
