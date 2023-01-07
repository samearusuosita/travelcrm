import React from 'react';
import Search from '../Search/Search';
import Title from '../Title/Title';
import "./Appointments.scss";
import {HiOutlineDotsVertical} from "react-icons/hi"

const Appointments = () => {

  const tablist = ["All Status", "Fulfiled", "Pending", "Cancelled"]


  return (
    <div className='app__appointment bgmain'>
      <div className="app__apointment-content">
      <Title Heading="Appointments" SubHeading="Here's the appointment list"/>
        <Search searchText="Search"/>
        <div className="table-task">
          <div className="app__tasks-tabs">
            <ul>

              {tablist.map((list, index) =>(
                (
                  <li key={index}>{list}</li>
                    )
                ))}
            </ul>
          </div>

          <table>
            <tr>
              <th>Client's Name</th>
              <th>Appointment Date</th>
              <th>Time</th>
              <th>Status</th>
              <th></th>
            </tr>
            <tr>
              <td>Odusote Mayokun</td>
              <td>2/1/2021</td>
              <td>11:25am</td>
              <td>Pending</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Odusote Mayokun</td>
              <td>2/1/2021</td>
              <td>11:25am</td>
              <td>Pending</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Odusote Mayokun</td>
              <td>2/1/2021</td>
              <td>11:25am</td>
              <td>Pending</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Odusote Mayokun</td>
              <td>2/1/2021</td>
              <td>11:25am</td>
              <td>Pending</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Odusote Mayokun</td>
              <td>2/1/2021</td>
              <td>11:25am</td>
              <td>Pending</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            
            
            
          </table>

        </div>
      </div>
    </div>
  )
}

export default Appointments
