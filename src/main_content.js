import React from 'react'
import './main_content.css'

class Project extends React.Component {
    render(){
        const projects = this.props.techs.map((img_src, index) =>{
            return(
                <img key={index} src={img_src} alt=""/>
            )
        })
        
        return(
            <div className="project">
                <img src={this.props.src_img} className="project-img" alt=""/>
                <div className="info-content">
                    <h3 className="title-app">{this.props.title}</h3>
                    <p className="description">{this.props.description}</p>
                    <div className="techs">
                        {projects}
                    </div>
                </div>
                <div className="hover-project">
                    <a href={this.props.project_link} target="_blank" rel="noopener noreferrer"><img src="img/view.svg" alt="icono vista" className="view-icon"/></a>
                    <p>Ver página</p>
                </div>
            </div>
        );
    }
}

const SectionProjects = () => {
    return(
        <section className="projects" id="proyectos">
            <div className="title-container">
                <h3 className="section-title">Mis proyectos</h3>
                <img src="/img/project.svg" alt="icono proyecto" className="img-project"/>
            </div>
            <div className="container-projects">
                <Project src_img="/img/2.jpg" 
                     title="Landing Page"
                     description="Ejemplo de una landing page responsive con el uso de CSS grid y flexbox."
                     techs={["/img/html5.svg", "/img/css3.svg", "/img/javascript.svg"]}
                     project_link="https://jonardz97.github.io/example-landing-page/"/>
                <Project src_img="/img/1.jpg"
                     title="Imagen Astronómica del día" 
                     description="Página web que hace uso de la API de la Nasa y que muestra la imagen/vídeo astronómico del día (en inglés), tiene la función de consultar la imagen de un día espeficado por el usuario."
                     techs={["/img/html5.svg", "/img/css3.svg", "/img/javascript.svg"]}
                     project_link="https://jonardz97.github.io/apod_nasa/"/>
                <Project src_img="/img/3.jpg"
                     title="Landing Page" 
                     description="Landing page responsive con waves svg haciendo uso de CSS grid y flexbox."
                     techs={["/img/html5.svg", "/img/css3.svg"]}
                     project_link="https://jonardz97.github.io/huddle-landing-page/"/>
                <Project src_img="/img/4.jpg"
                     title="Consulta de clima" 
                     description="Página web con darkmode que mediante el uso de una API hace la consulta del clima de una locación espeficifada por el usuario, también es posible realizar ésta consulta mediante la localización aproximada del usuario."
                     techs={["/img/html5.svg", "/img/css3.svg", "/img/javascript.svg"]}
                     project_link="https://jonardz97.github.io/weather-app/"/>
                <Project src_img="/img/5.jpg"
                     title="Validacíon de Formulario" 
                     description="Ejemplo de una validacíon sencilla sobre un formulario en el lado del cliente."
                     techs={["/img/html5.svg", "/img/css3.svg", "/img/javascript.svg"]}
                     project_link="https://jonardz97.github.io/simple-signup-form/"/>
            </div>
        </section>
    );
}

const SectionAboutMe = (props) => {
    return(
        <section className="sobre-mi" id="sobre-mi">
            <h3 className="section-title">Sobre mí</h3>
            <div className="container-about-me">
                <img src={props.src_img} className="about-me-img" alt=""/>
                <div className="container-desc-about">
                    <img src="/img/user_avatar.svg" alt="imagen  avatar usuario"/>    
                    <hr className="center-ball"/>
                    <p className="about-me-desc">{props.description}</p>
                </div>
            </div>
        </section>
    );
}

class MainContent extends React.Component{
    render(){
        return(
            <main>
                <SectionProjects/>
                <SectionAboutMe src_img="/img/Web-Developer-Flatline.svg" description="Soy Jonathan Rodríguez, desarrollador web junior. Amante de la tecnología, el desarrollo web, el café y los deportes."/>
            </main>
        );
    }
}

export default MainContent;