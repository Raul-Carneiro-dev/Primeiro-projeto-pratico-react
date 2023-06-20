import React from'react';
import './styles.css';
import logo from '../../assets/header/Wild-Rift-1.png'

function Footer() {

    return (
        <div id='footer'>
            <img src={logo} alt='logo wild-rift'/>
            <span>Todos os diretos reservados ©</span>
            <span>Desenvolvido por: Raul-Carneiro-Dev</span>
        </div>
    )
}

export default Footer;