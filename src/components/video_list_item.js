import React from "react";
import VideoDetail from "./video_detail.js";

// a stateless component that deconstructs the video and onVideoSelect props to be used with the same name
const VideoListItem = ({ video, onVideoSelect }) => {
  //grabbing the url instead of putting it all as the src for the img
  const imageUrl = video.snippet.thumbnails.default.url;
  return;
  //the onClick event calls the onVideoSelect function with the currently clicked video to be passed in as an argument
  // onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
  // this sets the overall app's state of selectedVideo to the video that was just clicked in order to fire the event
  <li className="list-group-item" onClick={() => onVideoSelect(video)}>
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </div>
  </li>;
};

export default VideoListItem;
