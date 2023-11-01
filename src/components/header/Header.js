import React from 'react'
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import VideoCall from "@material-ui/icons/VideoCall"
import "./header.css"

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
      </div>
     
     <div className="header-input">
        <input placeholder="Search" type="text" name="" id="" />
        <SearchIcon className="header-inputBtn" />
     </div>
     
     <div className="header-icons">
      <VideoCall className="header-icon"/>
      <AppsIcon className="header-icon"/>
      <NotificationsIcon className="header-icon"/>
      <Avatar alt="" src="https://lh3.googleusercontent.com/a/ACg8ocJuFH3j5j5XYiReDUBZmGCT0a7Ds2f-iN-cx07TzA6Www=s288-c-no" />
     </div>
    </div>
  )
}

export default Header
