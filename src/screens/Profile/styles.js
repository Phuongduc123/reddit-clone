import {StyleSheet} from 'react-native';
import COLORS from '../../consts/styles/color';
import {s} from '../../consts/styles/scalingUtils';
import {widthScreen, heightScreen} from '../../consts/consts';


export const styles = StyleSheet.create({
  viewTop: {
    backgroundColor: COLORS.white,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  viewBottom: {
    backgroundColor: COLORS.DarkGray,
    flex: 0.85,
  },
  avatar: {
    width: s(100),
    height: s(100),
    position: 'relative',
    top: '50%',
    borderRadius:100,
    borderColor:"#4884ab",
    borderWidth:2,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: s(20),
    alignSelf:"center"
  },
  tabText: {
    color: COLORS.White,
    fontSize: s(20),
    marginLeft: s(10),
  },
  infoGroup: {
    marginTop: s(50),
    marginBottom: s(30),
    alignItems: 'center',
  },
  nameText: {
    color: COLORS.White,
    fontSize: s(30),
  },
  infoText: {
    color: COLORS.White,
    fontSize: s(14),
  },
  EditProfile:{
    alignSelf:"center",
    width:150
  },
  editPro:{
    marginTop:70,
    alignSelf:"center",
  },
  nameInput:{
    backgroundColor:"#CCD2D7",
    width:200,
    borderRadius:10,
    marginTop:5,
  },
  sexInput:{
    backgroundColor:"#CCD2D7",
    width:200,
    borderRadius:10,
    marginTop:5,
  },
  dateInput:{
    backgroundColor:"#CCD2D7",
    width:200,
    borderRadius:10,
    marginTop:5,
    marginBottom:20,
  },
  ageInput:{
    backgroundColor: '#CCD2D7',
    width:200,
    marginTop:5,
    marginBottom:20,
    display: 'flex',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Roboto-Bold',
    height:50,
  },
  ageText:{
    height:48,
    textAlignVertical:"center",
    paddingLeft:3,
    color:"white",
  },
  accountImage: {
    position: 'absolute',
    height: 30,
    width: 30,
    // left: widthScreen * 0.8,
    // top: 10,
    zIndex: 20,
    marginLeft:140
  },
});
