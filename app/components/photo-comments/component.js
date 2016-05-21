import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comments'],
  actions: {
    handleSubmit: function () {
      // get the current post id
      var postId = this.get('postId');

      // get data entered into the form
      var author = this.get('author');
      var comment = this.get('comment');

      // call our action creator
      this.add(postId, author, comment);

      // reset form values
      this.setProperties({
        author: '',
        comment: ''
      });
    }
  }
});
