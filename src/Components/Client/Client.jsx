import React from 'react';
import Search from '../Search/Search';
import Title from '../Title/Title';
import "./Client.scss";

const Client = () => {

  // const tableitems = [{name: "Adegoke oluwadailare"}, 
  // {Email: "adegoketemitope1909@gmail.com"},
  // {Phone: "Phone"},
  // {Resident: "No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria"},
  // {Status: ""}]

  return (
    <div className='app__client  bgmain'>
      <div className="app__client-content padding">
        <Title Heading="Client" SubHeading="Here's the clients list"/>
        <Search searchText="Search by name, email..."/>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Resident Address</th>
            <th>Status</th>
          </tr>

          <tr>
            <td>Adegoke oluwadailare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria</td>
            <td></td>
          </tr>
          <tr>
            <td>Adegoke oluwadailare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria</td>
            <td></td>
          </tr>
          <tr>
            <td>Adegoke oluwadailare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria</td>
            <td></td>
          </tr>
          <tr>
            <td>Adegoke oluwadailare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria</td>
            <td></td>
          </tr>
          <tr>
            <td>Adegoke oluwadailare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria</td>
            <td></td>
          </tr>
          <tr>
            <td>Adegoke oluwadailare</td>
            <td>adegoketemitope1909@gmail.com</td>
            <td>08160730668</td>
            <td>No 2, Olonade Close, Monata, Ibadan Oyo State, Nigeria</td>
            <td></td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Client
