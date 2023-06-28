import './Header.css'

import Links from './litleComponents/Links'

const Header = () => {
    return (
        <header>
            <div className='div-header-principal limitar-largura'>
                <div className='div-header-secundaria'>
                    <Links/>

                    <div className="div-header-img-mobile"></div>

                    <h1>
                        Prazer em te conhecer! <br/>
                        Meu nome é <span className='nome'>Roberto da Roc<span className='nome-ultimas-letras'>ha.</span></span>
                    </h1>

                    <p className='paragrafo-header'>
                        Eu estudo Ciências e Tecnologia na Universidade Federal do ABC, sou apaixonado por programação desde a infância e estou estudando para me tornar um programador Front End.
                    </p>

                    <a className='link-contato' href="https://wa.me/5511944628852" target='blank'>Entrar em contato</a>
                </div>

                <div className="div-header-img"></div>
            </div>
        </header>
    )
}

export default Header