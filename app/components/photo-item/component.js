import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'figure',
  classNames: ['grid-figure'],
  commentCount: Ember.computed('comments', function () {
    var post = this.get('post');
    var comments = this.get('comments');
    return comments[post.code] ? comments[post.code].length : 0
  })
});
