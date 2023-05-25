// import { useState } from 'react'
import { CardState } from '@/store/cardReducer'
import './Cards.css'

interface CardsProps {
    card: CardState,
    onChange: (card: CardState, newStatus: "ToDo" | "InProgress" | "Completed") => void
}

function Cards({card, onChange}: CardsProps) {
    return (
        <div key={card.id} className="cards">
            <h3 className="cardsTitle">{card.title}</h3>
            <div className="cardsDescription">
                <p>{card.description}</p>
            </div>
            <div>
                <h4 className="cardsListTitle">To do list</h4>
                <ul className="cardsList">
                    {
                    card.toDo.map((item, index) => 
                        <li key={index}>
                            <label className="container">
                                <input type="checkbox" id="idea" name="idea"/>
                                <span className="checkmark"></span>
                            </label>
                            <label >{item}</label>
                        </li>
                    )
                    }
                </ul>
            </div>
            <div className='cardsTag'>
                {card.tags.map((tag, index) => <p key={index} className='tag'>{tag}</p>)}
            </div>
            <div className='debug'>
                <h3>Changer le statut DEBUG</h3>
                <div className='debugButton'>
                    <button onClick={() => onChange(card, "ToDo")} >To Do</button>
                    <button onClick={() => onChange(card, "InProgress")} >In Progress</button>
                    <button onClick={() => onChange(card, "Completed")} >Completed</button>
                </div>
            </div>
        </div>
    )
}



export default Cards