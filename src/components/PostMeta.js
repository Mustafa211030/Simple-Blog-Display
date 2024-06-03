import React from 'react';

function PostMeta({ author, date }) {
  return (
    <div className="PostMeta">
      <span>By {author}</span> | <span>{date}</span>
    </div>
  );
}

export default PostMeta;
