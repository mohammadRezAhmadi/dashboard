import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSm.css'
import {widgetListUser as data} from '../../Data'
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New User</span>
      <ul className="widgetSmList">
        {data.map(user =>(
        <li className="widgetSmItem" key={user.id}>
            <img src={user.img} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            </button>
        </li>
        ))}
      </ul>
    </div>
  )
}
