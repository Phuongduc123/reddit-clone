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
});

export default styles;
