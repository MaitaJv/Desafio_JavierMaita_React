import React from 'react'
//productos
import products from '../products.json'

//CSS
import './ItemListContainer.css';

//LOGICA
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (
    <main>
        <ItemList items={products}/>
    </main>
  )
}

export default ItemListContainer;