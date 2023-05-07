import './Footer.css'

import Whatsapp from '../assets/icones/whatsapp.png'
import Email from '../assets/icones/o-email.png'
import Linkedin from '../assets/icones/logotipo-do-linkedin.png'

const Footer = () => {
    return (
        <footer>
            <div className='div-footer-principal limitar-largura'>
                <div>
                    <h2>Contato</h2>
                    <p>
                        Eu estou a procura do meu primeiro emprego como programador e ficaria muito grato em 
                        receber uma oportunidade. Para entrar em contato comigo basta me mandar
                        mensagem via Whatsapp, me enviar um email ou me contactar pelo Linkedin.
                    </p>
                </div>

                <div className='div-contato'>
                    <a href="#"> <img src={Whatsapp} alt="Whatsapp simbolo" /> </a>
                    <a href="#"> <img src={Email} alt="Email simbolo" /> </a>
                    <a href="#"> <img src={Linkedin} alt="Linkedin simbolo" /> </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer