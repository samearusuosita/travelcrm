import React from 'react';
import "./Menu.scss";
import { Images } from '../../Constants';

const Menu = () => {
  return (
    <div className='app__menu'>
        <div className="app__menu-content">
          <img className='app__menu-noti' src={Images.bell} alt="" />
          <p className='app__menu-name'>Samuel</p>
          <img className="App__menu-pro-img" src={Images.Passme} alt="" />
        </div>
      
    </div>
  )
}

export default Menu
