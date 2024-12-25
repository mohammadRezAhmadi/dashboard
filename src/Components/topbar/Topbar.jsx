import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <h1 className='topBarLogo'>MHMREZ</h1>
            </div>
            <div className='topRight'>
                <div className='topLeftIconContainer'>
                <NotificationsNoneIcon />
                <span className='iconBadge'>{2}</span>
                </div>
                <div className='topLeftIconContainer'>
                <LanguageIcon />
                <span className='iconBadge'>{2}</span>
                </div>
                <div className='topLeftIconContainer'>
                <SettingsIcon />
                </div>
                <img src='/images/ahmadi.jpg'/>
            </div>
        </div>
    </div>
  )
}
