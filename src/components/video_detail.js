import React from "react";

// a stateless component used to render the video details such as title and description
const VideoDetail = ({ video }) => {
  //while the video is null, we show "Loading..." until there is a video from the state to render
  if (!video) {
    return <div>Loading...</div>;
  }

  //taking the videoId out of the video object that is returned to us from youtube
  //we can add it to the url for iframe src purposes
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  //rendering the video with an iframe along with the title and description
  //that came back with the youtube api
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
