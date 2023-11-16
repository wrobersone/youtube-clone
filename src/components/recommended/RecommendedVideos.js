import React from 'react'
import "./recommended.css"
import VideoCard from "./VideoCard"

function RecommendedVideos() {
  return (
    <div className="recommended">
      <div className="recommendedVideos">
        <VideoCard 
          title="The Ultimate NEXT.JS Crash Course for Beginners"
          views="139K Views"
          timestamp="2 months ago"
          channelImage="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s48-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/7DVdVGm7Ht8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBroNLyRL7VzlfAsK-ksmIihnAldQ"
        />
        <VideoCard 
          title="React Tutorial for Beginners"
          views="1.4M Views"
          timestamp="7 months ago"
          channelImage="https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s48-c-k-c0x00ffffff-no-rj"
          channel="Programming with Mosh"
          image="https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChbr7yRBFhR7K-rqbSJIbfKCCnzQ"
        />
        <VideoCard 
          title="How to Deploy a Next.js app to a Custom Server"
          views="15K Views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s48-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/HIb4Ucs_foQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3S6QcWFaqlgf8UQrgB2pMJWBQPg"
        />
        <VideoCard 
          title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners"
          views="1.8M Views"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKapf8X30fx26MeQs3O6Vdy0jNCroWTLqSzI0zKD_Q=s48-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"
        />
        <VideoCard 
          title="Build and Deploy a Better Spotify 2.0 Clone with React (Tailwind, Redux, RapidAPI)"
          views="435K Views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s48-c-k-c0x00ffffff-no-rj"
          channel="JavaScript Mastery"
          image="https://i.ytimg.com/vi/I1cpb0tYV74/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeCjYjSHbHLBjJH5jYONPSpQ-Hyg"
        />
        <VideoCard 
          title="Build Modern Portfolio with NextJS, TypeScript, SSR and React Bricks CMS"
          views="155K Views"
          timestamp="1 years ago"
          channelImage="https://yt3.ggpht.com/ytc/APkrFKapf8X30fx26MeQs3O6Vdy0jNCroWTLqSzI0zKD_Q=s48-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/Ym6RYyRBPaA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE0vZf9ClBZyVbKeZL1oNVtZjtbw"
        />
        
      </div>
    </div>
  )
}

export default RecommendedVideos
