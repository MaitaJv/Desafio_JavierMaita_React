import React from 'react'

//LOGICA
import ItemCount from './ItemCount';

import {Outlet, Link } from "react-router-dom";
//CSS
import './ItemListContainer.css';

const Item = ({id, title, description, price, image}) => {
  return (
    <div>
        <div className="main">
            <div className="grid-container">
                <div className="articulo">
                    <div className="img-articulo">
                    <Link to={'Articulo/' + id}>
                        <img src={image} className="img-articulo" height="200px" alt='arduino UNO'/>
                    </Link>
                    </div>
                    <div className="card-text-container">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>{price}</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Item