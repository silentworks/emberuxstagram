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

var PhotoGridComponent = Ember.Component.extend({
  classNames: ['photo-grid']
});

export default connect(stateToComputed, dispatchToActions)(PhotoGridComponent);
