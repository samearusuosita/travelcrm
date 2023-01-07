import React from 'react';
import Title from '../../Components/Title/Title';
import "./ClientProfile.scss";

const ClientProfile = () => {

const travelList = [{date: "1/2/2021", invoice: "$452152", ammount: "10,000", paid: "2,000", balance: "8,000", dest: "Travel to Dubia", descpt: "Tempora aliquam voluptatem quaerat negue", status: "pending"}, 
{date: "1/2/2021", invoice: "$452154", ammount: "5,000", paid: "2,000", balance: "8,000", dest: "Travel to Dubia", descpt: "Tempora aliquam voluptatem quaerat negue", status: "rejected"},
{date: "1/2/2021", invoice: "$452246", ammount: "5,000", paid: "2,000", balance: "8,000", dest: "Travel to Dubia", descpt: "Tempora aliquam voluptatem quaerat negue", status: "rejected"},
{date: "1/2/2021", invoice: "$452134", ammount: "10,000", paid: "2,000", balance: "8,000", dest: "Travel to Dubia", descpt: "Tempora aliquam voluptatem quaerat negue", status: "paid"}]

  return (
    <div className='app__clientprofile bgmain'>
        <div className="app__clientprofile-content">
        <Title Heading ="Client Profile" SubHeading="View client profile here" />
        </div>

        <div className="table-task">   
     
            <div className="travellist">
                <div className="travellist-de">
                    <p>1/2/2021</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ClientProfile
