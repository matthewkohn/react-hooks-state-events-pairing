import React from 'react';

function Video({ videoURL, title }) {
  console.log(`From VIDEO: ${title}`)
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoURL}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
    </div>
  )
}


// "https://www.youtube.com/embed/dQw4w9WgXcQ"
export default Video;