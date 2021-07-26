import {StyleSheet} from 'react-native';
import COLORS from '../../consts/styles/color';
import {s, vs} from '../../consts/styles/scalingUtils';

export const styles = StyleSheet.create({
  titleView: {
    backgroundColor: COLORS.DarkGray,
    padding: s(15),
    borderRadius: s(5),
    marginVertical: s(20),
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center'
  },
  titleText: {color: COLORS.Black, fontSize: s(24), fontWeight: 'bold'},
  mainView: {
    backgroundColor: COLORS.DarkGray,
    paddingHorizontal: s(10),
    borderRadius: s(5),
  },
  descriptionView: {
    backgroundColor: COLORS.white,
    padding: s(15),
    borderRadius: s(5),
    marginTop: s(10),
  },
  imageBox:{
    backgroundColor: COLORS.white,
    padding: s(15),
    borderRadius: s(5),
    marginTop: s(10),
  },
  actionView: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: s(5),
    marginTop: s(20),
    padding: s(10),
    marginBottom: s(10),
  },
  commentActionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.DarkGray,
  },
  commentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
    overflow: 'hidden',
    height: s(50),
    backgroundColor: COLORS.DarkGray,
    paddingRight: s(10),
    marginTop: s(20),
  },
  commentAvatarImg: {
    width: s(30),
    height: s(30),
    borderRadius: s(15),
    marginHorizontal: s(10),
  },
  commentInput: {
    backgroundColor: COLORS.white,
    width: '80%',
    height: '80%',
    borderRadius: s(20),
    paddingHorizontal: s(10),
    color: 'black',
  },
  commentInputReply:{
    backgroundColor: "rgba(0,0,0,0.1)",
    width: '100%',
    borderRadius: s(20),
    paddingHorizontal: s(10),
    color: 'black',
  },
  replyComment:{
    marginLeft:20,
    marginBottom:20,
  },
  sendIconReply:{
    position: 'absolute',
    marginLeft: s(260),
    marginTop:10,
  },
  sendIcon: {
    position: 'absolute',
    marginLeft: s(285),
  },
  titleCommentBox: {
    color: 'rgba(0,0,0,0.5)',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  comment: {
    backgroundColor: 'white',
    flexDirection:"row",
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:20,
    marginBottom:10,
  },
  avatarUser: {
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 37,
    height: 37,
    resizeMode: 'cover',
    borderColor: '#4884ab',
    borderWidth: 20,
    marginLeft: 10,
  },
  avatarUserImage: {
    borderRadius: 100,
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },
  bodyComment:{
    marginLeft:10,
  },
  upvoteNode:{
    flexDirection:"row",
    alignItems:"center"
  },
  downvoteNode:{
    marginLeft:10,
    flexDirection:"row",
    alignItems:"center"
  },
  operation:{
    flexDirection:"row",
    alignItems:"center"
  },
  slide:{
    
  },
  imageSlide:{
    width:300,
    height:300
  }
});
