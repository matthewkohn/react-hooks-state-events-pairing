import React from 'react';

function CommentButton({ onDisplayToggle, commentDisplay }) {

  return (
    <div>
      <button onClick={onDisplayToggle}>
        {commentDisplay ? "Hide" : "Show"} Comments
      </button>  
    </div>
  )
}

export default CommentButton;