import './Projects.css'

import Formulario from '../assets/formulario.png'

import CardProjects from './litleComponents/CardProjects'

const Projects = () => {
    return (
        <main className='projetos'>
          <div className='limitar-largura'>
            <h2>Projetos</h2>
            <div className='container-card-projects'>
                <CardProjects img={Formulario} title="Formulário multi-step" 
                text="Formulário multi-step feito utilizando HTML, CSS, JavaScript, React e Context API"/>

                <CardProjects img={Formulario} title="Formulário multi-step" 
                text="Formulário multi-step feito utilizando HTML, CSS, JavaScript, React e Context API"/>  

                <CardProjects img={Formulario} title="Formulário multi-step" 
                text="Formulário multi-step feito utilizando HTML, CSS, JavaScript, React e Context API"/>
                
                <CardProjects img={Formulario} title="Formulário multi-step" 
                text="Formulário multi-step feito utilizando HTML, CSS, JavaScript, React e Context API"/>
            </div>
          </div>
        </main>
    )
}

export default Projects