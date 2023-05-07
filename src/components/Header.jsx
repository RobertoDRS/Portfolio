import './Header.css'

import Links from './litleComponents/Links'

const Header = () => {
    return (
        <header>
            <div className='div-header-principal limitar-largura'>
                <div>
                    <Links/>

                    <h1>
                        Prazer em te conhecer! <br/>
                        Meu nome é <span className='nome'>Roberto da Roc<span className='nome-ultimas-letras'>ha.</span></span>
                    </h1>

                    <p className='paragrafo-header'>
                        Eu estudo Ciências e Tecnologia na Universidade Federal do ABC, sou apaixonado por programação desde a infância e estou estudando para me tornar um programador full stack.
                    </p>

                    <a className='link-contato' href="#">Entrar em contato</a>
                </div>

                <div className="div-header-img">
                    
                </div>
            </div>
        </header>
    )
}

export default Header