import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Auth } from './components';
import Messages from './message/message';
import Dashboard from './Admin/dashboardAdmin';
import Employee from './Admin/employee';
import { Role } from './Admin/role';
import Create from './Admin/create';
import Notes from './Admin/note';
import Calendrier from './Admin/calendrier';
import DashboardResponsable from './Responsable/dashboardResponsable';
import { Createproject } from './Responsable/createprojet';
import Projets from './Responsable/listeProjet';
import { Updateprojet } from './Responsable/updateProjet';
import Taches from './Responsable/listeTache';
import { CreateTache } from './Responsable/createTache';
import { UpdateTache } from './Responsable/updateTache';
import HomeVideo from './Responsable/VideoHome';
import RoomPage from './Responsable/Room';

import NotesRes from './Responsable/note';
import CalendrierRes from './Responsable/calendrier';
import { Equipe } from './Responsable/equipe';
import HomeGoogle from './Responsable/Google/HomeGoogle';
import Conges from './RH/demandes';
import NotesRh from './RH/noteRh';
import CalendrierRh from './RH/calendrier';
import HomeVideoRh from './RH/VideoHome';
import RoomPageRh from './RH/Room';
import ListesConges from './RH/listesConges';
import DashboardRh from './RH/dashboardRh';
import Backloge from './backloge';


import { Demande } from './Responsable/demandeResponsable';
import DashboardDev from './Developpeur/dashboardDeveloppeur';
import { DemandeDev } from './Developpeur/demandeDeveloppeur';
import Notesdev from './Developpeur/note';
import Calendrierdev from './Developpeur/calendrier';
import RoomPagedev from './Developpeur/Room';
import HomeVideodev from './Developpeur/VideoHome';
import BgVideo from './BgVideo';
import Navigate from './navigation';




function App() {
  return (
    <div >
        <Router>
            <Routes>
            <Route path='/' element={<BgVideo/>}/>
                <Route path='/auth' element={<Auth />}/>
                <Route path='/navbar' element={<Navigate />}/>
                <Route path='/messages' element={<Messages />}/>
                <Route path="/dashboardAdmin" element={<Dashboard />}/>
                <Route path="/employee" element={<Employee />}/>
                <Route path="/role" element={<Role />}/>
                <Route path="/note" element={<Notes />}/>
                <Route path="/calendrier" element={<Calendrier/>}/>
                

                <Route path="/responsable" element={<DashboardResponsable/>}/>
                <Route path="/createProjet" element={<Createproject/>}/>
                <Route path="/listeProjet" element={<Projets/>}/>
                <Route path='/updateprojet/:id' element={<Updateprojet/>}/>
                <Route path="/listeTache" element={<Taches />}/>
                <Route path="/createTache" element={<CreateTache />}/>
                <Route path='/updateTache/:id' element={<UpdateTache/>}/>
                <Route path='/HomevideoResponsable' element={<HomeVideo/>}/>
                <Route path='/roomResponsable/:roomId' element={<RoomPage/>}/>
                <Route path="/demande" element={< Demande/>}/>
                <Route path="/noteres" element={<NotesRes />}/>
                <Route path="/calendrierres" element={<CalendrierRes />}/>
                <Route path="/equipe" element={<Equipe />}/>
                <Route path="/homegoogle" element={<HomeGoogle />}/>

                <Route path="/rh" element={<DashboardRh />}/>
                <Route path="/demandes" element={<Conges/>}/>
                <Route path="/noteRh" element={<NotesRh/>}/>
                <Route path="/calendrierRh" element={<CalendrierRh/>}/>
                <Route path='/HomevideoRh' element={<HomeVideoRh/>}/>
                <Route path='/roomRh/:roomId' element={<RoomPageRh/>}/>
                <Route path="/listeConge" element={<ListesConges/>}/>
                <Route path="/backloge" element={<Backloge />}/>

                <Route path="/developpeur" element={<DashboardDev />}/>
                <Route path="/demandedev" element={<DemandeDev/>}/>
                <Route path="/notedev" element={<Notesdev/>}/>
                <Route path="/calendrierdev" element={<Calendrierdev/>}/>
                <Route path='/roomDeveloppeur/:roomId' element={<RoomPagedev/>}/>
                <Route path='/Homevideodev' element={<HomeVideodev/>}/>
                
                
            </Routes>
        </Router>
    </div>
  )
}

export default App ;