import BaseRequest from './BaseRequest';

const schema = '';
/**
 * key base on host:port
 */
export default class PostRequest extends BaseRequest {
  createPost(subName,params) {
    const url = `s/${subName}/post/`;
    return this.post(url, params);
  }

  getDetailPost(id) {
    const url = `p/${id}/`;
    return this.get(url)
  }

  postUpvote(id) {
    const url = `p/${id}/upvote/`;
    return this.post(url);
  }

  postDownvote(id) {
    const url = `p/${id}/downvote/`;
    return this.post(url)
  }

  deleteVote(postId) {
    const url = `p/${postId}/deletevote/`;
    return this.post(url)
  }

  postComment(postId, params) { 
    const url = `p/${postId}/comment/`;
    return this.post(url, params)
  }

  replyComment(commentId, params){
    const url = `c/${commentId}/reply/`;
    return this.post(url, params)

  }

  getCommentOfComment(commentId){
    const url = `c/${commentId}/`;
    return this.get(url)
  }


  getUserPosts(){
    const url = `u/post_list`;
    return this.get(url);
  }


  upvoteComment(idComment){
    const url = `c/${idComment}/upvote/`
    return this.post(url)
  }

  downvoteComment(idComment){
    const url = `c/${idComment}/downvote/`
    return this.post(url)
  }


  deletevoteComment(idComment){
    const url = `c/${idComment}/deletevote/`
    return this.post(url)
  }

  replyComment(idComment, params){
    const url = `c/${idComment}/reply/`
    return this.post(url, params)
  }

  getMyPost(){
    const url = `u/post_list/`;
    return this.get(url)
  }

  deletePost(postId){
    const url = `p/${postId}/delete/`
    return this.post(url)
  }

  searchPost(params){
    const url =`p/search/`;
    return this.get(url, params)
  }

  editPost(postId, params){
    const url =`p/${postId}/edit`;
    return this.post(url, params)
  }

  





}
