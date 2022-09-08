import './App.css';
import Appbar from './Components/Appbar'
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import AssetView from './Components/Asset';
import AssetForm from './Components/AssetForm';
import Geofence from './Components/Geofence';
import Timeline from './Components/Timeline';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Decka from './Components/decka';

function App() {
  return (
    <div className="h-full bg-indigo-300">
        <div>
        <Appbar/>
        <Sidebar/>
     </div>
     <div className=" h-full md:h-full lg:h-screen bg-indigo-300">
       <BrowserRouter> 
       
       <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/welcome" element={<Welcome/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/asset" element={<AssetView/>}/>
       <Route path="/create" element={<AssetForm/>}/>
       <Route path="/geofencing" element={<Geofence/>}/>
       <Route exact path="/timeline/:req_id" element={<Timeline/>}/>
       </Routes>
       </BrowserRouter>
     </div>
     </div>
  );
}

export default App;
