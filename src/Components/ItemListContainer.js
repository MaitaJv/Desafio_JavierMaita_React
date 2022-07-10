import React from 'react'
//imagenes
import arduinoUNO from '../IMG/arduino-venta.webp'
import arduinoNANO from '../IMG/arduino-nano-venta.webp'
import Esp8266 from '../IMG/Esp8266-venta.webp'
import Esp32 from '../IMG/Esp32-venta.webp'
import RP4 from '../IMG/RP4-venta.webp'
import DHT11 from '../IMG/DHT11-venta.webp'
import products from '../products.json'

//CSS
import './ItemListContainer.css';

//LOGICA
import ItemCount from './ItemCount';
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (
    <main>
        <ItemList items={products}/>
        
    </main>
  )
}

export default ItemListContainer;