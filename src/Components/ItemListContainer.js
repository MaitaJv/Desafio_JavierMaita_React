import React from 'react'
//imagenes
import arduinoUNO from '../IMG/arduino-venta.webp'
import arduinoNANO from '../IMG/arduino-nano-venta.webp'
import Esp8266 from '../IMG/Esp8266-venta.webp'
import Esp32 from '../IMG/Esp32-venta.webp'
import RP4 from '../IMG/RP4-venta.webp'
import DHT11 from '../IMG/DHT11-venta.webp'

//CSS
import './ItemListContainer.css';

//LOGICA
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
  return (
    <main>
        <div className="main">
            <div className="grid-container">
                <div className="articulo">
                    <div className="img-articulo">
                        <img src={arduinoUNO} className="img-articulo" height="200px" alt='arduino UNO'/>
                    </div>
                    <div className="card-text-container">
                        <h4>Arduino UNO R3</h4>
                        <p>Placa de desarrollo apra comenzar a introducirse en lo que es programacion en base a objetos</p>
                        <p>$2.500</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
                <div className="articulo">
                    <div className="img-articulo">
                        <img src={arduinoNANO} className="img-articulo" height="200px" alt='arduino NANOO'/>
                    </div>
                    <div className="card-text-container">
                        <h4>Arduino NANO</h4>
                        <p>todo el poder del arduino uno en una placa comprimida</p>
                        <p>$1.500</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
                <div className="articulo">
                    <div className="img-articulo">
                        <img src={Esp8266} className="img-articulo" height="200px" alt='ESP8266'/>
                    </div>
                    <div className="card-text-container">
                        <h4>ESP8266</h4>
                        <p>Placa de desarrollo con modulo WiFi incluido</p>
                        <p>$1.500</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
                <div className="articulo">
                    <div className="img-articulo">
                    <img src={Esp32} className="img-articulo" height="200px" alt='ESP32'/>
                    </div>
                    <div className="card-text-container">
                        <h4>ESP32</h4>
                        <p>Placa de desarrollo con modulo WiFi/Bluetooth incluido</p>
                        <p>$1.800</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
                <div className="articulo">
                    <div className="img-articulo">
                    <img src={RP4} className="img-articulo" height="200px" alt='Raspberry Pi 4'/>
                    </div>
                    <div className="card-text-container">
                        <h4>Raspberry Pi 4</h4>
                        <p>Placa de desarrolo para expertos</p>
                        <p>$5.800</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
                <div className="articulo">
                    <div className="img-articulo">
                    <img src={DHT11} className="img-articulo" height="200px" alt='DHT-11'/>
                    </div>
                    <div className="card-text-container">
                        <h4>DHT11</h4>
                        <p>Sesor Humedad y Temperatura</p>
                        <p>$600</p>
                        <ItemCount stock={5} initial={1} onAdd={ (n) => alert(`agregados ${n} productos`)}/>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="total">
            <button onclick="calcularTotal()">Total</button>
        </div>
    </main>
  )
}

export default ItemListContainer;