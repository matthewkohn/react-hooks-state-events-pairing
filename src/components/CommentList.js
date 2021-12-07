import React from 'react';

function CommentList({ comments, commentDisplay }) {
  const displayValue = {display: commentDisplay ? 'block' : 'none'};

  const commentList = comments.map((comment) => (
    <div key={comment.id}>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
    )
  );

  return (
    <div style={displayValue}>
      <hr />
      <h2>{comments.length} Comments</h2>
      {commentList}
    </div>
  )
}

export default CommentList;