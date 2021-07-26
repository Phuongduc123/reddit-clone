import BaseRequest from './BaseRequest';

const schema = '';
/**
 * key base on host:port
 */
export default class UserRequest extends BaseRequest {
  Signup(params) {
    const url = `register/`;
    return this.post(url, params, false);
  }

  Login(params) {
    const url = `login/`;
    return this.post(url, params, false)
  }

  getUserProfile(params) {
    const url = `u/profile/`;
    return this.get(url,params)
  }

  updateProfile(params) {
    const url = `u/profile/edit/`;
    return this.post(url,params)
  }


}
