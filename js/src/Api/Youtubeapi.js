import React, { Component, Fragment } from 'react';
import axios from 'axios';
let KEY = 'AIzaSyAewd8OSQ1K0mn0tr2tI2TMt1f3SY5YG_E';

export const baseParams = {
  part: 'snippet',
  maxResults: 10,
  key: KEY,
};
let youTubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default youTubeApi;
