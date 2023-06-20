import React, { useEffect, useState } from'react';
import './styles.css';
import logo from '../../assets/header/Wild-Rift-1.png';
import { Link } from 'react-router-dom';


function Header() {
    
    const [sidebarButton, setSidebarButton] = useState(false)

    useEffect(() => {
        document.body.style.overflowY = sidebarButton ? 'hidden' : 'auto';

    },[sidebarButton])

    return (
        <div>
          <div className={ sidebarButton ? 'sidebar-on' : 'sidebar-off'}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
            <button className='button-sidebar-close' onClick={() => setSidebarButton(false)}><span className="material-symbols-outlined">close</span></button>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/riotgames'><li>Riot Games</li></Link>
                    <Link to='/heros'><li>Heros</li></Link>
                    <Link to='/cinematic'><li>Cinematic</li></Link>
                </ul>
            </nav>
          </div>

          <div id='header'>
              <img  src={logo} className='logo' alt='logo wild-rift'/>
              <nav>
                  <ul>
                      <Link to='/'><li>Home</li></Link>
                      <Link to='/riotgames' target='blank'><li>Riot Games</li></Link>
                      <Link to='/heros'><li>Heros</li></Link>
                      <Link to='/cinematic'><li>Cinematic</li></Link>
                  </ul>
             </nav>
             <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
             <button onClick={() => setSidebarButton(!sidebarButton)} className={ sidebarButton ? 'button-sidebar-off' : 'button-sidebar-on'}><span className="material-symbols-outlined">menu</span></button>
          </div>         

        </div>

        
        
    )
}

export default Header;