import { connect } from 'react-redux';
import Layout from '../components/layout';
import PostList from '../containers/post_list';
import SinglePost from '../containers/single_post';
import React from 'react';

const contentMap = {
  'postList': () => (<PostList />),
  'singlePost': () => (<SinglePost />)
};

export default connect(
  ({layout}) => {
    const layoutInfo = {content: contentMap[layout.content]}
    return layoutInfo;
  }
)(Layout);
