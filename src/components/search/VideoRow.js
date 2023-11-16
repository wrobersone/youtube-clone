import React from 'react'
import "./videorow.css"

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow-text">
        <h3>{title}</h3>
        <p className="videoRow-headline">{channel} &#8226; <span className="videoRow-subs">
          <span className="videoRow-subsNumber">{subs}</span>
          </span>  Subscribers {views} views &#8226; {timestamp} </p>
        <p className="videoRow-description">{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
