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
  createAccountText:{
    textAlign: 'center',
    // fontWeight:'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    marginTop:heightScreen*0.05,
    color: 'black',
  }, 
  introText: {
    textAlign: 'center',
    // fontWeight:'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: 'rgba(40, 37, 37, 0.7)',
  },
  nameInput:{
    backgroundColor: '#CCD2D7',
    opacity: 0.6,
    color: 'rgba(40, 37, 37, 0.7)',
    display: 'flex',
    marginLeft: widthScreen * 0.03,
    marginRight: widthScreen * 0.03,
    marginTop: heightScreen * 0.07,
    borderRadius: 7,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
  },
  usernameInput: {
    backgroundColor: '#CCD2D7',
    opacity: 0.6,
    color: 'rgba(40, 37, 37, 0.7)',
    display: 'flex',
    marginLeft: widthScreen * 0.03,
    marginRight: widthScreen * 0.03,
    marginTop: heightScreen * 0.02,
    borderRadius: 7,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
  },
  sexInput:{
    backgroundColor: '#CCD2D7',
    opacity: 0.6,
    color: 'rgba(40, 37, 37, 0.7)',
    display: 'flex',
    marginLeft: widthScreen * 0.03,
    marginRight: widthScreen * 0.03,
    marginTop: heightScreen * 0.02,
    borderRadius: 7,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
  },
  ageInput:{
    backgroundColor: '#CCD2D7',
    opacity: 0.6,
    color: 'rgba(40, 37, 37, 0.7)',
    display: 'flex',
    marginLeft: widthScreen * 0.03,
    marginRight: widthScreen * 0.03,
    marginTop: heightScreen * 0.02,
    borderRadius: 7,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
  },
  passwordInput: {
    backgroundColor: '#CCD2D7',
    opacity: 0.6,
    color: 'rgba(40, 37, 37, 0.7)',
    display: 'flex',
    marginLeft: widthScreen * 0.03,
    marginRight: widthScreen * 0.03,
    marginTop: heightScreen * 0.02,
    borderRadius: 7,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
  },
  passwordAgainInput:{
    backgroundColor: '#CCD2D7',
    opacity: 0.6,
    color: 'rgba(40, 37, 37, 0.7)',
    display: 'flex',
    marginLeft: widthScreen * 0.03,
    marginRight: widthScreen * 0.03,
    marginTop: heightScreen * 0.02,
    borderRadius: 7,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
  },
  accountImage: {
    position: 'absolute',
    height: 30,
    width: 30,
    left: widthScreen * 0.8,
    top: 10,
    zIndex: 20,
  },
  lockImage: {
    position: 'absolute',
    height: 30,
    width: 30,
    left: widthScreen * 0.8,
    top: 10,
    zIndex: 20,
  },
  registerButton: {
    marginTop: heightScreen * 0.05,
    marginLeft: widthScreen * 0.3,
    marginRight: widthScreen * 0.3,
    borderRadius: 40,
  },
  hadAccountText:{
    marginTop: heightScreen * 0.2,
    display:"flex",
    alignItems:"center",
  },
  singinText:{
    color:"white",
  },
  indicator:{
      alignSelf:"center",
      marginTop:heightScreen*0.5
  }
  
});

export default styles;
