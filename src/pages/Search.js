import React from 'react'
import "./searchPage.css"
import TunOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from "../components/search/ChannelRow"
import VideoRow from "../components/search/VideoRow"

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TunOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow 
        image="https://yt3.googleusercontent.com/ytc/APkrFKapf8X30fx26MeQs3O6Vdy0jNCroWTLqSzI0zKD_Q=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />

      <hr />

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...check this out."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
      />

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...check this out."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
      />

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...check this out."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
      />

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...check this out."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
      />
    </div>
  )
}

export default SearchPage
