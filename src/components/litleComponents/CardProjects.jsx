import './CardProjects.css'

const CardProjects = (props) => {
    return(
        <div className='div-card-projects-principal'>
            <div className='div-hover'>
                <img className='img-site' src={props.img} alt="Imagem do site" />
                <p>{props.text}</p>
            </div>
            <div>
                <span>{props.title}</span>
                <div className='div-links-card-projects'>
                    <a href="#">Ver site</a>
                    <a href="#">Ver código</a>
                </div>
            </div>
        </div>
    )
}

export default CardProjects