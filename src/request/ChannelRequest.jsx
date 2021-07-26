import BaseRequest from './BaseRequest';

const schema = '';
/**
 * key base on host:port
 */
export default class ChannelRequest extends BaseRequest {
  createChannel(params){
    const url = `s/create/`;
    return this.post(url, params);
  }

  getListChannelByToken(params) {
    const url = `u/sub_list/`;
    return this.get(url, params);
  }

  getDetailChannel(subname) {
    const url = `s/${subname}/`;
    return this.get(url); 
  }

  getAllWorldChannel(){
    const url = `anonymous/sub/all/`
    return this.get(url)
  }

  attendChannel(subName){
    const url = `s/${subName}/join/`; 
    return this.post(url)
  }

  leaveChannel(subChannel){
    const url = `s/${subChannel}/leave/`;
    return this.post(url)
  }

  deleteChannel(subName){
    const url = `s/${subName}/delete/`;
    return this.post(url)
  }

  editChannel(subName, params){
    const url =`s/${subName}/edit/`;
    return this.post(url, params)
  }
  

}
