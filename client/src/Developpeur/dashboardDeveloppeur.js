

import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Navigate from '../navigation';

 function DashboardDev() {


    return (
        <div>
            {/* Votre JSX pour le composant Dashboard */}
            <section id="sidebar" >
                <Link to={'/'} className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text" style={{marginTop:'50px'}}>Developpeur</span>
                </Link>
                <ul className="side-menu top">
                    <li className="">
                        <Link to={'/dashboard'}>
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                 
                   
                    <li>
                        <Link to={'/Homevideodev'}>
                        <i class='bx bx-video'></i>                        
                            <span className="text">Salle de Reunion</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/homegoogle'}>
                        <i class='bx bx-bot'></i>
                            <span className="text">Gemini IA</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/messages'}>
                            <i className='bx bxs-message-dots' ></i>
                            <span className="text">Messages</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/demandedev'}>
                            <i className='bx bxs-message-dots' ></i>
                            <span className="text">Demande Conge</span>
                        </Link>
                    </li>
                  
                  
                </ul>
                <ul className="side-menu">
                    <li>
                       
                    <Link to={'/notedev'}>
                            <i className='bx bx-notepad' ></i>
                            <span className="text">Notes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/calendrierdev'}>
                            <i className='bx bx-calendar' ></i>
                            <span className="text">Calendrier</span>
                        </Link>
                    </li>
                   
                </ul>
            </section>
             

            
            <div id="content">
                <Navigate></Navigate>
                <main>
                    {/* Contenu du tableau de bord */}
                </main>
            </div>

                
        </div>
    );
}
export default DashboardDev;
