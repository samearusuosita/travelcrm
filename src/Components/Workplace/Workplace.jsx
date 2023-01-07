import React from 'react';
import Title from '../Title/Title';
import "./Workplace.scss";

const Workplace = () => {
  return (
    <div className='app__workplace bgmain'>
      <div className="app__workplace-content">
        <Title Heading ="Your Workplace" SubHeading="Welcome xxx" />

          <div className="app__workplace-overview">
            <p className='app__workplace-sub'>Overview</p>
            <div className="app__wordplace-overview-cont">
              <div className='app__wp-ag'>Today's Agenda</div>
              <p className='app__workplace-sch'>You can't have any event scheduled for today <span>Add</span></p>
            </div>
          </div>


          <div className="app__workplace-overview padding-top">
            <div className="app__wordplace-overview-cont">
              <div className='app__wp-ag'>Tasks that are due <span className='viewtask'>View task report</span><span className='arrow'>&#8594;</span></div>
              <div className="app__workplace-duetask">
                <p className='app__workplace-fl-text'>Follow up with <span className='task_name'>Odosote </span></p>
                <p className='app__workplace-fl-text2'>Due on: 1/21/2021 <span>Created on: 1/15/2021</span></p>
              </div>
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Workplace
