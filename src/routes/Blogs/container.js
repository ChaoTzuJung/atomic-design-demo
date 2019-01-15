import { connect } from 'react-redux';

import { getBlogs, cleanBlogs } from 'actions/blog';
import Blogs from './component';

const mapStateToProps = state => ({
	posts: state.blogs.posts,
});

const mapDispatchToProps = dispatch => ({
	getBlogs: () => dispatch(getBlogs()),
	cleanBlogs: () => dispatch(cleanBlogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
