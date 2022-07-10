import React, { useState, useEffect } from 'react';
import Item from './Item'

const ItemList = ({items}) => {
    const [loading, setLoading] = useState(true);

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
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
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