import Video from './Video'
import Stats from './Stats'
import LikeButton from './LikeButton';
import Comments from './Comments';

import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <body class={"App"}>
      <Video 
        videoURL={video.embedUrl} 
        title={video.title}  
      />
      <Stats 
        views={video.views}
        uploaded={video.createdAt}
      />
      <LikeButton
        likeType={true}
        votes={video.upvotes}
      />
      <LikeButton
        likeType={false}
        votes={video.downvotes}
      />
      <Comments comments={video.comments}/>
    </body>
  );
}
/* 
App
  Video
  Details
    Stats
    LikeButton
    LikeButton
    Comments
      CommentButton
      CommentList
        Comment
        Comment
  

*/

export default App;
