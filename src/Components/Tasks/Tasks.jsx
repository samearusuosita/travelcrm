import React, { useState } from 'react';
import Search from '../Search/Search';
import Title from '../Title/Title';
import "./Tasks.scss";
import {HiOutlineDotsVertical} from "react-icons/hi";
import {FaResearchgate} from "react-icons/fa";
import UpdateTask from "../UpdateTask/UpdateTask";

const Tasks = () => {

  const tablist = ["All Status", "Not Started", "Started", "Completed", "Cancelled", "Declined"]
  
  // to open the updaate form
  const [modalOpened, setModalOpened] = useState(false);


  return (
    <div className='app__task bgmain'>
      <div>
        <Title Heading="Tasks" SubHeading="Here's the tasks list"/>
        <Search searchText="Search"/>

            <div className='modaleOpen'>
                <FaResearchgate  
                width='2rem' 
                height='1.2rem' 
                onClick={() => setModalOpened(true)}/>
                <UpdateTask 
                modelOpened={modalOpened} 
                setModelOpened={setModalOpened}/>
            </div>

      </div>
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
              <th>Title</th>
              <th>Date Created</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th></th>
            </tr>
            <tr>
              <td>Schedule training</td>
              <td>2/1/2021</td>
              <td>15/1/2021</td>
              <td>High</td>
              <td>Not Started</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Close out support request</td>
              <td>2/1/2021</td>
              <td>3/1/2021</td>
              <td>Urgent</td>
              <td>Completed</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Send Contract</td>
              <td>2/1/2021</td>
              <td>15/1/2021</td>
              <td>Normal</td>
              <td>Declined</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Send Contract</td>
              <td>2/1/2021</td>
              <td>4/1/2021</td>
              <td>Low</td>
              <td>Not Started</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            <tr>
              <td>Close out support request</td>
              <td>2/1/2021</td>
              <td>15/1/2021</td>
              <td>Urgent</td>
              <td>Completed</td>
              <td><HiOutlineDotsVertical/></td>
            </tr>
            
            
          </table>
      </div>
    </div>
  )
}

export default Tasks
