import React from 'react';
import Title from '../Title/Title';
import "./Case.scss";
import Btn from '../Btns/btn';
import {BiListCheck} from "react-icons/bi";
import {BsCalendar2Date} from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai";




const Case = () => {
  return (
    <div className='app__case bgmain'>
      <div className="app__case-heading">
        <Title Heading="Case Note" SubHeading="Create case note"/>
      </div>
      <div className="table-task">
        <p className='app__case-p'>Enter case details</p>
        
        <div className="twocolums-form">
            <form action="">
 
              <div class="row">
                <div class="col-50">
                  <label for="fname">Client's Name</label>

                 
                  <input type="text" id="fname" name="clientsname"/>
                  <label for="email">Todo List by Client</label>
                  <div className="side-icons">
                     <BiListCheck/>
                  </div>
                 
                  <input type="text" id="email" name="email"/>
                  <label for="adr">Todo List Consultant</label>
                  <div className="side-icons">
                     <BiListCheck/>
                  </div>

                  <input type="text" id="adr" name="address"/>
                  <label for="city">Advice</label>
                  <textarea id="subject" name="subject"  rows="5" cols="33"/>
                </div>

                <div class="col-50">
                <label for="state">Next Appointment</label>
                    <div className="side-icons">
                      <BsCalendar2Date/>
                    </div>
                    <input type="text" id="state" name="state"/>
                    <label for="state">Today List by Client</label>
                    <div className='clients-lists'>
                      <ul>
                        <li>Verify passport document <span><AiOutlineCloseCircle/></span></li>
                        <li>Verify passport document <span><AiOutlineCloseCircle/></span></li>
                        <li>Verify passport document <span><AiOutlineCloseCircle/></span></li>
                        <li>Verify passport document <span><AiOutlineCloseCircle/></span></li>
                      </ul>
                    </div>
                    <label for="state">Today List Consultant</label>
                    <div className='clients-lists'>
                    <ul>
                        <li className='span-side'>Verify passport document <span><AiOutlineCloseCircle/></span></li>
                      </ul>
                    </div>
                </div>
              </div>
                  
            </form>
            <div className="btnsubmit">
              <Btn title="Save"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Case
