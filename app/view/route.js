import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    // hack in order to get the post id from the url segment
    return { postId: params.code }
  }
});
