import React from 'react'
import "../../styles/Offers.css";

function OfferItem(props) {
    return (
        <div className="offer__item">
            <div className="offer__description">
                <h3 className="offer__desc--title">{props.offer.offerTitle}</h3>
                <p className="offer__desc--time">{props.offer.offerTime}</p>
            </div>
            <p className="offer__location">{props.offer.company} <span className="offer__location2">{props.offer.location}</span></p>
            <div className="offer__deets">
                <p className="offer__deets--text">{props.offer.offerDetails}</p>
                <span className="offer__deets--arrow"><span>{">"}</span></span>
            </div>
        </div>
    )
}

export default OfferItem
