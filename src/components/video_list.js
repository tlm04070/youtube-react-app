import React from "react";
import VideoListItem from "./video_list_item.js";

const videoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem video={video} key={video.etag} />;
  });

  return <ul>{videoItems}</ul>;
};

export default videoList;
