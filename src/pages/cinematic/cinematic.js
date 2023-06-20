import React, { useRef, useState } from "react";
import "./styles.css";
import Header from "../../components/header/header";
import clip1 from "../../assets/cinematic/Legends.mp4";
import clip2 from "../../assets/cinematic/Warriors.mp4";
import clip3 from "../../assets/cinematic/Awaken.mp4";
import Footer from "../../components/footer/footer";


function Cinematic() {

    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(true)
    const [button3, setButton3] = useState(true)

    const cinematic1 = useRef()
    const cinematic2 = useRef()
    const cinematic3 = useRef()

    function play1 () {
      return cinematic1.current.play()
    }
    function play2 () {
      return cinematic2.current.play()
    }
    function play3 () {
      return cinematic3.current.play()
    }


    return (
        <>
        <Header />
        <div id="cinematic-container">
            <div className="cinematic-content">
                <div className="cinematic">
                  <h1>|Legends Never Die|</h1>
                  <video ref={cinematic1} className="clip1" controls>
                    <source src={clip1}/>
                    Seu navegador não possui suporte para vídeo
                  </video>
                  <img className={ button1 ? "clips thumbnail-clip1-on" : "thumbnail-clip-off"} src="https://i.ytimg.com/vi/4Q46xYqUwZQ/maxresdefault.jpg" alt="thumbnail"/>
                  <button className={button1 ? "play-button-on" : "play-button-off"} onClick={() => play1(setButton1(!button1))}/>
                </div>
                
                
                <div className="cinematic">
                  <h1>|Warrior|</h1>
                  <video ref={cinematic2} controls>
                    <source src={clip2}/>
                    Seu navegador não possui suporte para vídeo
                  </video>
                  <img className={button2 ? "clips thumbnail-clip2-on" : "thumbnail-clip-off"} src="https://i.ytimg.com/vi/fmI_Ndrxy14/maxresdefault.jpg" alt="thumbnail"/>
                  <button className={button2 ? "play-button-on" : "play-button-off"} onClick={() => play2(setButton2(!button2))}/>
                </div>
                
            
                <div className="cinematic">
                  <h1>|Awaken|</h1>
                  <video ref={cinematic3} controls>
                    <source src={clip3}/>
                    Seu navegador não possui suporte para vídeo
                  </video>
                  <img className={button3 ? "clips thumbnail-clip3-on" : "thumbnail-clip-off"} src="https://i.ytimg.com/vi/zF5Ddo9JdpY/maxresdefault.jpg" alt="thumbnail"/>
                  <button className={button3 ? "play-button-on" : "play-button-off"} onClick={() => play3(setButton3(!button3))}/>
                </div>
                

            </div>
        </div>
        <Footer />
        </>
    )
}

export default Cinematic;