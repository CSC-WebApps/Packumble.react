import { useState } from 'react';

function Card(props) {
    const [flipped, setFlipped] = useState(false);

    let back;
    if (props.email)
        back = <div className="card__face card__face--back">{props.email}</div>;
    else
        back = <div className="card__face card__face--back"></div>;

    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.imgId}.png`
    return (
        <div id="potentialmatch" className={'p-2 card w-50' + (flipped ? ' is-flipped' : '') + (props.isAMatch ? ' fire' : '') + (props.swiperight ? ' swiperight' : '')} onClick={() => setFlipped(!flipped)}>
            <div className="card-body">
                <div className="card__face">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.language}</h6>
                    <img src={src} alt="" />
                </div>
                {back}
            </div>
        </div>
    )
}

export default Card;