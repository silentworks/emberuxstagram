import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import actions from 'emberuxstagram/actions/index';
import redux from 'npm:redux';

var { bindActionCreators } = redux;

var stateToComputed = (state) => {
  var { posts, comments } = state;
  return {
    posts,
    comments
  }
};

var dispatchToActions = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

var PhotoSingleComponent = Ember.Component.extend({
  classNames: ['single-photo'],
  postIndex: Ember.computed('posts', function () {
    var posts = this.get('posts');
    var postId = this.get('post_id');

    return posts.findIndex((post) => post.code === postId);
  }),

  post: Ember.computed('posts', function () {
    var posts = this.get('posts');
    var index = this.get('postIndex');

    return posts[index];
  }),

  postComments: Ember.computed('comments', function () {
    var comments = this.get('comments');
    var postId = this.get('post_id');
    return comments[postId] || [];
  })
});

export default connect(stateToComputed, dispatchToActions)(PhotoSingleComponent);
