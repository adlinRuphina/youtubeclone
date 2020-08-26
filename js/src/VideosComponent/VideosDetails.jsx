import React, { Component } from 'react';

function VideoDetails({ video, loading }) {
  //for video display condition is given, else it will throw err because of null given in  onSelectedVideo
  if (!video) {
    return 'loading...';
  }
  let videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
}
export default VideoDetails;
