import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Unregistered/Home';
import AboutUs from './Pages/Unregistered/About Us';
import Support from './Pages/Unregistered/Support';
import Quote from './Pages/Unregistered/Quote';
import Features from './Pages/Unregistered/Features';

import ResearchBase from './Pages/Researcher/ResearchBase';
import OverviewR from './Pages/Researcher/Overview(R)';
import TeamR from './Pages/Researcher/Team(R)';
import Verifcation from './Pages/Researcher/Verification';
import HeatmapR from './Pages/Researcher/Heatmap(R)';
import Clients from './Pages/Researcher/Clients';
import Records from './Pages/Researcher/Beacon Records';

import DashSupport from './Pages/Customer/Dash Support';
import Heatmap from './Pages/Customer/Heatmap';
import Overview from './Pages/Customer/Overview';
import Team from './Pages/Customer/Team';
import BasePage from './Pages/Customer/BasePage';
import Login from './Pages/Unregistered/Login';
import PublicBase from './Pages/Unregistered/PublicBase';


function App() {


  return (
      <>  
          <Routes> 
            <Route path='/' element={<PublicBase/>}>  
              <Route index element={<Home/>}/>
              <Route path='features' element={<Features/>}/>
              <Route path='about us' element={<AboutUs/>}/>
              <Route path='support' element={<Support/>}/>
              <Route path='quote' element={<Quote/>}/>
              <Route path='login' element={<Login/>}/>
            </Route> 

            <Route path='/researcher' element={<ResearchBase/>}>
              <Route path='overview' element={<OverviewR/>}/>
              <Route path='team' element={<TeamR/>}/>
              <Route path='verification' element={<Verifcation/>}/>
              <Route path='heatmap' element={<HeatmapR/>}/>
              <Route path='clients' element={<Clients/>}/>
              <Route path='records' element={<Records/>}/>
            </Route>

            <Route path='/client' element={<BasePage/>}>
              <Route path='overview' element={<Overview/>}/>
              <Route path='support' element={<DashSupport/>}/>
              <Route path='heatmap' element={<Heatmap/>}/>
              <Route path='team' element={<Team/>}/>
            </Route>
          </Routes>
      </>  
  );
}

export default App;
