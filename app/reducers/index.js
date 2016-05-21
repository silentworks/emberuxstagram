import redux from 'npm:redux';
import posts from 'emberuxstagram/reducers/posts';
import comments from 'emberuxstagram/reducers/comments';

// reducer combination is dealy with by ember-redux
// so you just export the data you want combined
export default {
  posts,
  comments
};
