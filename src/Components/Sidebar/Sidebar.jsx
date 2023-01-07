import React from 'react';
import "./Sidebar.scss";
import { FaBars } from 'react-icons/fa'
import {RiDashboardLine} from "react-icons/ri";
import {IoIosPeople} from "react-icons/io"
import {FaTasks} from "react-icons/fa"
import {VscCalendar} from "react-icons/vsc"
import {BsCardChecklist} from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import { Images } from '../../Constants';




const Sidebar = ({children}) => {


    const menuItems=[
        {
            path: "/workplace",
            name: "Workplace",
            icon: <RiDashboardLine/>
        },
        {
            path: "/client",
            name: "Client",
            icon: <IoIosPeople/>
        },
        {
            path: "/tasks",
            name: "Tasks",
            icon: <FaTasks/>
        },
        {
            path: "/appointments",
            name: "Appointments",
            icon: <VscCalendar/>
        },
        {
            path: "/case",
            name: "Case",
            icon: <BsCardChecklist/>
        },
    ]

  return (
    <div className='container'>
      <div className="sidebar">
            <div className="top_section">
                <img src={Images.logo} alt="" />
            </div>
            {menuItems.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link-text">{item.name}</div>
                </NavLink>
            ))}
        </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
