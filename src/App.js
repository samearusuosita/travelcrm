
import './App.scss';
import Login from './Pages/Login/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Appointments from './Components/Appointments/Appointments';
import Workplace from './Components/Workplace/Workplace';
import Client from './Components/Client/Client';
import Case from './Components/Case/Case';
import Tasks from './Components/Tasks/Tasks';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashb from './Pages/Dashb/Dashb';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App"> 
     
      <BrowserRouter>
      <Menu/>
      <Sidebar>
    
        <Routes>
         <Route path="/" element={<Workplace/>}/>
         <Route path="/Workplace" element={<Workplace/>}/>
         {/* <Route path="/" element={<Login/>}/> */}
         <Route path="/Workplace" element={<Workplace/>}/>
         <Route path="/Client" element={<Client/>}/>
         <Route path="/Tasks" element={<Tasks/>}/>
         <Route path="/Appointments" element={<Appointments/>}/>
         <Route path="/Case" element={<Case/>}/>
         
        </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
