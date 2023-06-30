import './Links.css'

import Github from '../../assets/icones/github.png'
import Linkedin from '../../assets/icones/logotipo-do-linkedin.png'
import Whatsapp from '../../assets/icones/whatsapp.png'

const Links = () => {
    return(
        <dir className="div-links margin-top">
            <a href="https://github.com/RobertoDRS" target='blank'> <img src={Github} alt="logo do github" /> </a>
            <a href="https://www.linkedin.com/in/roberto-dRocha" target='blank'> <img src={Linkedin} alt="logo do linkedin" /> </a>
            <a href="https://wa.me/5511944628852" target='blank'> <img src={Whatsapp} alt="logo do whatsapp" /> </a>
        </dir>
    )
}

export default Links