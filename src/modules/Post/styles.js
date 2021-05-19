import {StyleSheet} from 'react-native';
import {widthScreen, heightScreen} from '../../consts/consts';

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems:"center",
    backgroundColor:"white",
    height:heightScreen*0.2,
    padding:7,
    margin:10,
    marginLeft:40,
    borderRadius:20,
    flexDirection:"row",
  },
  postAvatar:{
    //   width:widthScreen*0.2,
    height:heightScreen*0.17,
    width:widthScreen*0.2,
    borderRadius:20,
    marginLeft:-30,
    marginRight:10,
    // elevation:5,
    // elevation:5,
  },
  themeNName:{
    flexDirection:'row',
    textAlign:'center',
  },  
  AvataFrame:{
    elevation:5,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
  },
  nameText:{
    fontWeight:'bold',
    fontSize:16,
  },
  iconTheme:{
    marginRight:5,
    height:15,
    width:15,
  },
  desText:{
    marginTop:10
  }, 
  content:{
    width:widthScreen*0.8,
    flexDirection:"column",
    height:heightScreen*0.17,
    justifyContent:'space-around'
  },
  iconLike:{
    height:15,
    width:15
  },
  iconComment:{
    height:15,
    width:15
  },
  seenIcon:{
    height:15,
    width:15,
    flex:0.6
  },
  likeComment:{
    flexDirection:"row",
    // marginTop:heightScreen*0.05,
    width:widthScreen*0.65,
  },
  LikeView:{
    flex:1,
  },
  commentView:{
    flex:3,
  },
  description:{
    flexDirection:"row",
    width:widthScreen*0.6
  },
  desText:{
    flex:1,
  },
  viewCom:{
    // justifyContent:'space-around',
    flex:8,
    flexDirection:'row'
  },
  LikeView:{
    flexDirection:'row',
    flex:1,
  },
  commentView:{
    flexDirection:'row',
    flex:3,
  }

  
  
});

export default styles;
