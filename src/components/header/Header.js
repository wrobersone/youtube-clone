import React, { useState } from 'react'
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import VideoCall from "@material-ui/icons/VideoCall"
import { Link } from "react-router-dom"
import "./header.css"

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to="/">
          <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
        </Link>
      </div>
     
     <div className="header-input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" name="" id="" />
        {/* Update the search dynamically - Takes you to the following page */}
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-inputBtn" />
        </Link>
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
