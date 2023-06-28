import './Projects.css'

import Formulario from '../assets/formulario.png'
import shortening from '../assets/url-shortening.png'
import fylo from '../assets/landing-page-fylo.png'

import CardProjects from './litleComponents/CardProjects'

const Projects = () => {
    return (
        <main className='projetos'>
          <div className='limitar-largura'>
            <h2 className='h2-projetos'>Projetos</h2>
            <div className='container-card-projects'>
                <CardProjects img={Formulario} title="Formulário multi-step" 
                text="É um formulário feito com o objetivo de praticar o uso de Context API e React."
                site="https://projeto-multi-step-form.netlify.app/" 
                codigo="https://github.com/RobertoDRS/Multi-step-form"
                />

                <CardProjects img={shortening} title="Url Shortening" 
                text="Trata-se de um site que contém integração com API externa, uso de Next js e TypeScript."
                site="https://projeto-url-shortening.netlify.app/"
                codigo="https://github.com/RobertoDRS/Url-shortening"
                />  

                <CardProjects img={fylo} title="Landing page Fylo" 
                text="Trata-se de uma landing page feita com o objetivo de praticar a criação de aplicações em react e responsividade."
                site="https://projeto-landing-page-fylo.netlify.app/"
                codigo="https://github.com/RobertoDRS/Fylo"/>
            </div>
          </div>
        </main>
    )
}

export default Projects