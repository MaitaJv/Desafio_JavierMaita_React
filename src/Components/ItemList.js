import React, { useState, useEffect } from 'react';
import Item from './Item'

const ItemList = ({items}) => {
    const [loading, setLoading] = useState(true);
  const TASKS = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5'];

  const onAddTask = ([str]) => {
    console.log(str);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log('useEffect');
  }, []);
  return (
    <div>
        {loading ? (
        <h3>Cargando..</h3>
        ) : (
            <div className="main">
                <div className="grid-container">
                        {items.map ((el) => (
                        <Item {...el} />
                    ))}
                </div>
            </div>
        )}
    </div>
  );
}

export default ItemList