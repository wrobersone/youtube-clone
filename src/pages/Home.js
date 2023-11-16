import React from 'react'
import Sidebar from "../components/sidebar/Sidebar"
import RecommendedVideos from "../components/recommended/RecommendedVideos"
import "../App.css"

function HomePage() {
  return (
    <div className="app-page">
     <Sidebar />
     <RecommendedVideos /> 
    </div>
  )
}

export default HomePage
