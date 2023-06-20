import React, { useContext, useRef } from'react';
import './styles.css';
import trailer from '../../assets/trailer/trailer.mp4';
import thumbnail from '../../assets/trailer/thumbnail.jpg';
import { UserContext } from '../../contexts/userContext';
import { Link } from 'react-router-dom';

function Trailer() {
    const trailerPlay = useRef()
    const {button,setButton} = useContext(UserContext)
    
    function play () {
        return trailerPlay.current.play()
    }

    return (
            <div id='trailer-container'>
                <div className='trailer-content'>
                   <div className='trailer-case'>
                    <video ref={trailerPlay} className='trailer' controls>
                        <source src={trailer} />
                        Seu navegador não possui suporte para vídeo
                    </video>
                    <img className={ button? 'thumbnail-on' : 'thumbnail-off'} src={thumbnail} alt='thumbnail-wildrift'/>
                    <button className={ button ? 'button-on' : 'button-off'} onClick={() => play(setButton(!button))}/>
                   </div>

                    <div className='sinopse'>

                        <p className='description'>
                           O estilo de jogo MOBA PvP do League of Legends, feito pela Riot Games, agora também nos 
                           dispositivos móveis com League of Legends: Wild Rift! O Wild Rift é um jogo estilo MOBA (Multiplayer Online Battle Arena) 5v5 cheio de 
                           ação, no qual suas habilidades e noções de estratégia e combate serão testadas. Junte-se a amigos, escolha um Campeão e jogue para vencer!
                           Joguem juntos em uma batalha de equipe emocionante, testando suas habilidades de combate para 
                           ver quem levará a melhor.
                        </p>
                        <Link to='https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift&referrer=singular_click_id%3D3885d941-dc06-4d43-bd75-584105092882' target='blank'><button className='download-button'>Baixar Wild Rift</button></Link> 

                    </div>

                </div>

            </div>
    )
}

export default Trailer;