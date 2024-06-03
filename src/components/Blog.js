import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import JSONLoader from './JSONLoader';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    JSONLoader().then(data => setPosts(data));
  }, []);

  return (
    <div className="Blog">
      <PostList posts={posts} />
    </div>
  );
}

export default Blog;
