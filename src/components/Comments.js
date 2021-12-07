import React, { useState } from 'react';
import CommentButton from './CommentButton';
import CommentList from './CommentList';

function Comments({comments}) {
  const [commentDisplay, setCommentDisplay] = useState(true);

  function handleClick() {
    setCommentDisplay(!commentDisplay);
  }

  return (
    <>
      <CommentButton 
        onDisplayToggle={handleClick}
        commentDisplay={commentDisplay}
      />
      <CommentList 
        comments={comments} 
        commentDisplay={commentDisplay} 
      />
    </>
  )
}

export default Comments;