import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div className="ui inverted segment">
      <div className="ui inverted relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
