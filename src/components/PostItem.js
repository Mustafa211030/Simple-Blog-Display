import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostMeta from './PostMeta';

function PostItem({ post }) {
  return (
    <div className="PostItem">
      <PostTitle title={post.title} />
      <PostMeta author={post.author} date={post.date} />
      <PostContent content={post.content} />
    </div>
  );
}

export default PostItem;
