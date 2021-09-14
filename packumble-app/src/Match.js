import React, { useState } from "react";
import Card from './Card';
import './Match.css';
import 'bootstrap/dist/css/bootstrap.css';

let username;
let language;
let card, setCard;
let matches, setMatches;


function Match() {
    [card, setCard] = useState(undefined);
    [matches, setMatches] = useState([]);

    const params = new URLSearchParams(window.location.search);
    username = params.get('username');
    language = params.get('language');

    return (
        <div className="container scene p-3 page border rounded">

            <h3>Start Matching!</h3>

            <section className="p-5">

                <div id="potentialmatch-container" className="d-flex flex-row m-3 justify-content-evenly" >
                    {card}
                </div>

                <div className="d-flex flex-row m-3 justify-content-evenly">
                    <button id="leftbtn" onClick={leftbtnClick}>⬅️</button>
                    <button id="rightbtn" onClick={rightbtnClick}>➡️</button>
                </div>
            </section>
            <section className="p-5">

                <h3><span id="username">{username}</span>'s Matches</h3>

                <div id="matcharea" className="d-flex flex-row mb-3 justify-content-evenly">
                    {matches}
                </div>

            </section>

            <div className="row">
                <a href="/index.html">HOME</a>
            </div>

        </div>
    );
}


function leftbtnClick(e) {

    // let card = $("#potentialmatch")[0];
    // card.addEventListener("transitionend", () => {
    // card.remove();

    // No, thanks
    fetch('/api/no').then(_ => {
        // Get next card
        fetch('/api/see')
            .then(response => response.json())
            .then(card => {
                createCard(card);
            });
    });
    // });

    // card.classList.add("swipeleft");
};

function rightbtnClick(e) {

    // Match?
    fetch('/api/trymatch', {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, language })
    })
        .then(response => response.json())
        .then(data => {

            console.log(data);

            let nextCard = () => {
                // Get next card
                fetch('/api/see')
                    .then(response => response.json())
                    .then(newcard => {
                        createCard(newcard);
                    });
            }

            // Set animation status based on match
            // if (data.match) {
            // card.classList.add("fire");
            // setIsAMatch(true); 
            // } else {
            // card.classList.add("swiperight");
            // setIsAMatch(false);
            // }

            // When swipe or animation ends, set next card
            // card.addEventListener("transitionend", nextCard);
            // card.addEventListener("animationend", () => {
            nextCard();
            if (data.match) setMatches([...matches, React.cloneElement(card, { email: data.email })]);
            //     $("#matcharea").append(card);
            //     $(card).find('.card__face--back').append(data.email);

            //     card.classList.remove("fire");
            //     card.removeEventListener("transitionend", nextCard);
            // });

        });

}

// Load card initial card
fetch('/api/see')
    .then(response => response.json())
    .then(card => {
        createCard(card);
        console.log(card);
    })
    .catch(err => {
        console.log(err)
    });

function createCard(card) {
    setCard(<Card language={card.language} name={card.name} imgId={card.imgId} />);
}

export default Match;
