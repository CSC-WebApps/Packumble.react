
function Card(props) {

    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.imgId}.png`
    return (
        <div id="potentialmatch" className={"p-2 card w-50 "}>
            <div className="card-body">
                <div className="card__face">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.language}</h6>
                    <img src={src} alt=""/>
                </div>
                <div className="card__face card__face--back"></div>
            </div>
        </div>
    )
}

export default Card;