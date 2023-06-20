import React, { useContext, useEffect, useRef } from "react";
import './styles.css';
import logo from '../../assets/riotgames/002-rg-2021-full-lockup-offwhite.jpg';
import trailer from '../../assets/riotgames/Arcane _ Trailer oficial _ Netflix.mp4';
import logoFooter from '../../assets/riotgames/riot-games-768.png';
import thumbnail from '../../assets/riotgames/thumbnail-netflix.jpg';
import { UserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import icon from '../../assets/icons/riot logo 2.png';



function RiotGames () {

    const trailerNetflix = useRef()
    const {button, setButton} =useContext(UserContext)

    function play() {
        return trailerNetflix.current.play()
    }
    
    useEffect(() => {
        document.body.style.overflowY = 'auto'
         
    },[])

    return (
        <div id="riotgames">

            <link rel="icon" type="image/x-icon" href={icon}/>

            <div id="header-riotgames">
                <img className="logo-riotgames" src={logo} alt='logo-riotgames'/>
            </div>

            <div id="banner-riotgames"></div>

            <div id="games-container">
                <h1>GAMES</h1>
                <div className="games-content">
                    <Link to='https://www.leagueoflegends.com/pt-br/' target="blank"><div className="games logo-1"></div></Link>
                    <Link to='https://playvalorant.com/pt-br/' target="blank"><div className="games logo-2"></div></Link>
                    <Link to='https://wildrift.leagueoflegends.com/pt-br/' target="blank"><div className="games logo-3"></div></Link>
                </div>
            </div>

            <div id="trailer-netflix-container">
                <div className="trailer-netflix-content">
                    <video ref={trailerNetflix} className="trailer-netflix" controls>
                        <source src={trailer}/>
                        Seu navegador não possui suporte para videos.
                    </video>
                    <img className={ button ? 'thumbnail-netflix-on' : 'thumbnail-netflix-off'} src={thumbnail} alt="thumbnail-netflix"/>
                    <button onClick={() => play(setButton(!button))} className={ button ? "play-netflix-on" : "play-netflix-off"}></button>

                    <Link to="https://www.netflix.com/br/title/81435684" target="blank"><button className="button-netflix">Assista na Netflix</button></Link>
                </div>
            </div>

            <div id='footer-riotgames'>
               <img src={logoFooter} alt='logo riotgames'/>
               <span>Todos os diretos reservados ©</span>
               <span>Desenvolvido por: Raul-Carneiro-Dev</span>
            </div>
        </div>
        
        
    )
}


export default RiotGames;