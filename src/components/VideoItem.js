import React from 'react';
import './VideoItem.css';
const VideoItem =({ video, onVideoSelect }) =>{
if(!video){
    return <div>Loading...</div>;
}
 return(
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.title} />
            <div className="content">
            <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );


};

export default VideoItem;