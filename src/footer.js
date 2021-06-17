import React from 'react'
import './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <footer id="contacto">
                <p className="title-footer">Mis redes sociales:</p>
                <div>
                    <a href="https://www.linkedin.com/in/jonathan-rodriguez-espinosa-609619204" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.svg" alt="icono linkedin" className="icon"/></a>
                    <a href="https://github.com/JonaRdz97" target="_blank" rel="noopener noreferrer"><img src="/img/github.svg" alt="icono github" className="icon"/></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="/img/twitter.svg" alt="icono twitter" className="icon"/></a>
                </div>
                <div className="attribution">
                    <p>Developed by Jonathan Rodríguez with </p><img src="./img/heart.svg" alt="icono corazon" className="heart"/>
                </div>
            </footer>
        );
    }
}

export default Footer;