import React, { useState } from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';


function Heros() {

    const [hero1, setHero1] = useState(false)
    const [hero2, setHero2] = useState(false)
    const [hero3, setHero3] = useState(false)
    const [hero4, setHero4] = useState(false)
    const [hero5, setHero5] = useState(false)
    const [hero6, setHero6] = useState(false)
    const [hero7, setHero7] = useState(false)
    const [hero8, setHero8] = useState(false)
    const [hero9, setHero9] = useState(false)
    const [hero10, setHero10] = useState(false)
    const [hero11, setHero11] = useState(false)
    const [hero12, setHero12] = useState(false)



    return (
        <>
        <Header />
        <div id="heros-container">
            <div className="heros-content">
                <div className="heros hero-1">
                    <div className={ hero1 ? "heros-information-on" : "heros-information-off"} >
                      <h3>JINX</h3>
                      <h4>Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jinx-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jinx-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jinx-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jinx-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jinx-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Jinx
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero1(!hero1)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                    </div>
                <div className="heros hero-2">
                    <div className={ hero2 ? "heros-information-on" : "heros-information-off"} >
                      <h3>DIANNA</h3>
                      <h4>Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos Lunari, um credo quase extinto nas terras ao redor do Monte Targon.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Diana-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Diana-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Diana-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Diana-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Diana-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Diana
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero2(!hero2)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-3">
                    <div className={ hero3 ? "heros-information-on" : "heros-information-off"} >
                      <h3>YASUO</h3>
                      <h4>Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Yasuo-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Yasuo-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Yasuo-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Yasuo-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Yasuo-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Yasuo
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero3(!hero3)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-4">
                    <div className={ hero4 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Lux</h3>
                      <h4>Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Lux-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Lux-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Lux-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Lux-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Lux-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Lux
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero4(!hero4)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-5">
                    <div className={ hero5 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Ahri</h3>
                      <h4>A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ahri-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ahri-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ahri-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ahri-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ahri-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Ahri
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero5(!hero5)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-6">
                    <div className={ hero6 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Jhin</h3>
                      <h4>Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jhin-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jhin-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jhin-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jhin-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Jhin-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Jhin
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero6(!hero6)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-7">
                    <div className={ hero7 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Nasus</h3>
                      <h4>Nasus é um majestoso Ascendente com cabeça de chacal da antiga Shurima; uma figura heroica considerada semideus pelo povo do deserto.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Nasus-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Nasus-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Nasus-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Nasus-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Nasus-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Nasus
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero7(!hero7)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-8">
                    <div className={ hero8 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Ezreal</h3>
                      <h4>Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ezreal-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ezreal-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ezreal-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ezreal-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ezreal-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Ezreal
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero8(!hero8)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-9">
                    <div className={ hero9 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Fizz</h3>
                      <h4>Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina. É comum que ele busque e devolva os dízimos jogados no mar por capitães supersticiosos.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Fizz-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Fizz-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Fizz-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Fizz-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Fizz-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Fizz
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero9(!hero9)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-10">
                    <div className={ hero10 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Evelynn</h3>
                      <h4>Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua voluptuosa aparência de fêmea humana.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Evelynn-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Evelynn-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Evelynn-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Evelynn-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Evelynn-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Evelynn
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero10(!hero10)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-11">
                    <div className={ hero11 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Ashe</h3>
                      <h4>A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ashe-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ashe-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ashe-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ashe-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ashe-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Ashe
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero11(!hero11)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
                <div className="heros hero-12">
                    <div className={ hero12 ? "heros-information-on" : "heros-information-off"} >
                      <h3>Ziggs</h3>
                      <h4>O yordle Ziggs, amante de grandes bombas e pavios curtos, é uma força explosiva da natureza.</h4>
                    
                        <div className="skill">Skills</div>
                        <div className="hero-skill">
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ziggs-Passive.png" alt="Passive"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ziggs-Q.png" alt="1st Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ziggs-W.png" alt="2nd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ziggs-E.png" alt="3rd Ability"/>
                           <img src="https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/ability/Ziggs-R.png" alt="4th Ability"/>
                        </div>
                    </div>

                    <h2 className="heros-description">Ziggs
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <button onClick={() => setHero12(!hero12)} className="button-description"><span className="material-symbols-outlined">menu</span></button>
                    </h2>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )

}

export default Heros;