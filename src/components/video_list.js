import React from "react";
import VideoListItem from "./video_list_item.js";

// a stateless component that will act as a container for the videos to be listed
const videoList = props => {
  // videoItem maps over the videos passed down from the app's state as props
  // for each video it creates three props including a unique key for each video
  // the video itself is passed to videoListItem as a prop and
  // the function onVideoSelect which was passed down as a prop is continuing to get passed down
  // as another prop with the same name
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  //the ul that will hold the mapped over videoItems
  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default videoList;
