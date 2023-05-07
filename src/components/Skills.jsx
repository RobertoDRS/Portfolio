import './Skills.css'

import HTML from '../assets/icones/html.png'
import CSS from '../assets/icones/css-3.png'
import JS from '../assets/icones/js.png'
import TypeScript from '../assets/icones/Typescript.svg'
import React from '../assets/icones/React-icon.svg'
import MySQL from '../assets/icones/mysql.png'
import Node from '../assets/icones/node-js.png'
import Git from '../assets/icones/Git-Icon-1788C.svg'
import Next from '../assets/icones/pngwing.png'

import CardSkills from './litleComponents/CardSkills'

const Skills = () => {
    return (
        <section>
            <div className='limitar-largura'>
                <h2 id="h2-conhecimentos">Conhecimentos</h2>
                <div className='skills'>
                    <CardSkills img={HTML} logo="logo HTML" text="Conhecimentos em HTML 5"/>
                    <CardSkills img={CSS} logo="logo CSS" text="Conhecimentos em CSS 3"/>
                    <CardSkills img={JS} logo="logo JavaScript" text="Conhecimentos em JavaScript"/>
                    <CardSkills img={TypeScript} logo="logo TypeScript" text="Conhecimentos em TypeScript"/>
                    <CardSkills img={React} logo="logo React" text="Conhecimentos em React"/>
                    <CardSkills img={MySQL} logo="logo MySQL" text="Conhecimentos em MySQL"/>
                    <CardSkills img={Node} logo="logo Node" text="Conhecimentos em Node"/>
                    <CardSkills img={Git} logo="logo Git" text="Conhecimentos em Git"/>
                    <CardSkills img={Next} logo="logo Next js" text="Conhecimentos em Next js" next/>
                </div>
            </div>
        </section>
    )
}

export default Skills