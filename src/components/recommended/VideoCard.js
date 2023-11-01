import { Avatar } from "@material-ui/core"
import React from 'react'
import "./videocard.css"

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard-thumbnail" src={image} alt="" />
      <div className="videoCard-info">
        <Avatar className="video-avatar" alt={channel} src={channelImage} />
        <div className="videoCard-text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} &#8226; {timestamp} </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
