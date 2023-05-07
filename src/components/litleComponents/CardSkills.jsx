import './CardSkills.css'

const CardSkills = (props) =>{
    return(
        <div className='card-skills'>
            <img className={props.next ? 'fundo-branco': ''} src={props.img} alt={props.alt} />
            <p>{props.text}</p>
        </div>
    )
}

export default CardSkills