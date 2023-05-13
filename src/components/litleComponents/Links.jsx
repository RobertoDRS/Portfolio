import './Links.css'

import Github from '../../assets/icones/github.png'
import Linkedin from '../../assets/icones/logotipo-do-linkedin.png'
import Whatsapp from '../../assets/icones/whatsapp.png'

const Links = () => {
    return(
        <dir className="div-links margin-top">
            <a href="#"> <img src={Github} alt="logo do github" /> </a>
            <a href="#"> <img src={Linkedin} alt="logo do linkedin" /> </a>
            <a href="#"> <img src={Whatsapp} alt="logo do whatsapp" /> </a>
        </dir>
    )
}

export default Links