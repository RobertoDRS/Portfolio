import './Skills.css'

import skills from '../data/skills'

import CardSkills from './litleComponents/CardSkills'

const Skills = () => {
    return (
        <section>
            <div className='limitar-largura'>
                <h2 className='margin-top'>Conhecimentos</h2>
                <div className='skills'>
                    <CardSkills img={skills.HTML} logo="logo HTML" text="Conhecimentos em HTML 5"/>
                    <CardSkills img={skills.CSS} logo="logo CSS" text="Conhecimentos em CSS 3"/>
                    <CardSkills img={skills.JS} logo="logo JavaScript" text="Conhecimentos em JavaScript"/>
                    <CardSkills img={skills.TypeScript} logo="logo TypeScript" text="Conhecimentos em TypeScript"/>
                    <CardSkills img={skills.React} logo="logo React" text="Conhecimentos em React"/>
                    <CardSkills img={skills.MySQL} logo="logo MySQL" text="Conhecimentos em MySQL"/>
                    <CardSkills img={skills.Node} logo="logo Node" text="Conhecimentos em Node"/>
                    <CardSkills img={skills.Git} logo="logo Git" text="Conhecimentos em Git"/>
                    <CardSkills img={skills.Next} logo="logo Next js" text="Conhecimentos em Next js" next/>
                </div>
            </div>
        </section>
    )
}

export default Skills