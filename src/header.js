import React from 'react'
import './header.css'

const NavigationBar = () => {
    return(
        <nav>
            <a href="#proyectos">Mis Proyectos</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto">Contacto</a>
        </nav>
    );
}

const TextHeader = (props) => {
    return(
        <div className="header-text">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    );
}

class Header extends React.Component{
    render(){
        return(
            <header className="header" id="header">
                <NavigationBar/>
                <TextHeader title="Bienvenidos a mi portafolio"
                            subtitle="Aquí podrás visualizar algunos de los trabajos que he realizado"/>
            </header>
        )
    }
}

export default Header;