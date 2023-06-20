import React from 'react'

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card)
  }
  
    return (
      <article className="elements__grid-item">
        <img
        src={props.card.link}
        alt={props.card.name}
        className="elements__grid-image"
        onClick={handleCardClick}
        />
        <div className="elements__grid-text-area">
          <h2 className="elements__grid-text">{props.card.name}</h2>
          <div className="elements__like-area">
            <button
            type="button"
            className="elements__like-button"
            ></button>
            <p className="elements__like-count">{props.card.likes.length}</p>
          </div>
        </div>
        <button className="elements__remove-button"></button>
      </article>
    )
  }
  
  export default Card