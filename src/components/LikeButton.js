import React, { useState } from 'react';

function LikeButton({ likeType, votes }) {
  const [count, setCount] = useState(votes)
  const likeEmoji = likeType ? "👍" : "👎";

  
  function handleClick() {
    setCount((currentCount) => currentCount + 1)
  }

  return (
    <button onClick={handleClick}>
      {count} {likeEmoji}
    </button>
  )
}

export default LikeButton;