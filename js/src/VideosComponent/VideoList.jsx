import React, { Component } from 'react';
import VideoItems from './VideoItem';
function VideoList({ videos, onSelectedVideo }) {
  // console.log(videos);
  const renderVideo = videos.map((video) => {
    //  console.log(onSelectedVideo);to check prop communicatng or not
    return (
      <VideoItems
        video={video}
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo} //for multiple videos to select one
      />
    );
  });
  return (
    <div>
      <h1>{renderVideo}</h1>
      {/* <VideoItems /> if you call here you will get only one there to get
      multiple map it */}
    </div>
  );
}
export default VideoList;
