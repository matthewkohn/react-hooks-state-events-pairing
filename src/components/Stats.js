import React from 'react';

function Stats({views, uploaded}) {
  return (
    <p>
      <span>{views} Views</span> | <span>Uploaded {uploaded}</span>
    </p>
  )
}

export default Stats;