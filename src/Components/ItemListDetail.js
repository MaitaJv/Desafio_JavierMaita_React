import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemListDetail = ({items}) => {

    let params = useParams();
    console.log(params.id)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 2000);
    console.log('useEffect');
    }, []);
  return (
    <div>
        {loading ? (
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        ) : (
            <div className="main">
                {<div className="grid-container">
                        {items.map ((el) => (
                        <ItemDetail {...el} />
                    ))}
                        
                </div>}
            </div>
        )}
    </div>
  )
}

export default ItemListDetail