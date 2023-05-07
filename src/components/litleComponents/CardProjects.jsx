import './CardProjects.css'

const CardProjects = (props) => {
    return(
        <div className='div-card-projects-principal'>
            <img src={props.img} alt="Imagem do site" />
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