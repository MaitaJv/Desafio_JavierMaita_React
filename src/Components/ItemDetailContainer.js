import React, { useState, useEffect } from 'react'
import ItemListDetail from './ItemListDetail';

//productos
import products from '../products.json'

const ItemDetailContainer = ({items}) => {
    return (
        <main>
            <ItemListDetail items={products}/>
        </main>
    );
}

export default ItemDetailContainer