// import { useState } from 'react'
import './Cards.css'

function Cards() {

  return (
    <div className="cards">
        <h3 className="cardsTitle">Design nouveau logo</h3>
        <div className="cardsDescription">
            <p>Voir des éléments visuels tels que des feuilles, des symboles d'énergie renouvelable ... <span>Voir plus</span></p>
        </div>
        <div>
            <h4 className="cardsListTitle">To do list</h4>
            <ul className="cardsList">
                <li>
                    <label className="container">
                        <input type="checkbox" id="idea" name="idea"/>
                        <span className="checkmark"></span>
                    </label>
                    <label >Idée</label>
                </li>
                <li>
                    <label className="container">
                        <input type="checkbox" id="idea" name="idea"/>
                        <span className="checkmark"></span>
                    </label>
                    <label >Sketch</label>
                </li>
                <li>
                    <label className="container">
                        <input type="checkbox" id="idea" name="idea"/>
                        <span className="checkmark"></span>
                    </label>
                    <label >Couleur</label>
                </li>
            </ul>
        </div>
        <div className='cardsTag'>
            <p className='tag'>Design</p>
            <p className='tag'>Refonte</p>
            <p className='tag'>Charte graphique</p>
        </div>
        <div className='debug'>
            <h3>Changer le statut DEBUG</h3>
            <div className='debugButton'>
                <button>A faire</button>
                <button>En cours</button>
                <button>Fini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards