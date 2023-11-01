import React from 'react'
import "./sidebarRow.css"

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className="sidebarRow-icon" />
      <h3 className="sidebarRow-title">{title}</h3>
    </div>
  )
}

export default SidebarRow