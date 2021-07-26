
import UserRequest from './UserRequest';
import PostRequest from './PostRequest';
import ChannelRequest from './ChannelRequest';
import AnomynousRequest from './AnomynousRequest'

const requestMap = {
  UserRequest,
  PostRequest,
  ChannelRequest,
  AnomynousRequest
};

const instances = {};

export default class RequestFactory {
  static getRequest(classname) {
    const RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error(`Invalid request class name: ${classname}`);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
      requestInstance = new RequestClass();
      instances[classname] = requestInstance;
    }
    return requestInstance;
  }
}
