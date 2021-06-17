import React from 'react'
import RecatDOM from 'react-dom'
import Header from './header'
import MainContent from './main_content'
import Footer from './footer'
import './normalize.css'
import './index.css'


const Button = (props) => {
    return(
        <a href="#header" className="go-back"><img className="btn-up" src={props.img_src} alt="icono flecha"/></a>
    );
}

class App extends React.Component{

    handleScroll(e){
        let element = e.target;
        let screen_size = window.innerHeight; /* la propiedad innerHeight del objeto window nos retornara un valor de tipo entero,
        que representara (en pixeles) la altura del viewport.*/
        if (window.getBoundingClientRect().top < screen_size) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    }

    render(){
        return(
            <div className="container">
                <Header/>
                <MainContent/>
                <Footer/>
                <Button img_src="/img/arrow.svg"></Button>
            </div>
        );
    }
}


RecatDOM.render(<App/>, document.getElementById('root'))