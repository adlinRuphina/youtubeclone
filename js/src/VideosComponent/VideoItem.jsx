import React, { Component } from 'react';
import './videos.styles.css';

import Moment from 'react-moment';

function VideoItems({ video, onSelectedVideo }) {
  //  console.log(onSelectedVideo);to check communict or not
  console.log(video.snippet);
  return (
    <div className="videoList" onClick={() => onSelectedVideo(video)}>
      {/*//out of ten one particular video will be selected and will rener */}
      <div className="videoBlocks_img">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="videoBlock_description">
        <h1>{video.snippet.title}</h1>
        <p className="channel_title">
          {video.snippet.channelTitle}
          <span>
            <Moment fromNow ago>
              {video.snippet.publishTime}
            </Moment>
            <span style={{ margin: '0px 5px' }}>ago</span>
          </span>
        </p>
      </div>
    </div>
  );
}
export default VideoItems;
