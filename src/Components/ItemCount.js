import {useState} from 'react'

const ItemCount = ({stock, initial,  onAdd}) => {
    const [count, setCount] = useState(initial);

    const incrementar = () => {
        if(count < 5){
            setCount(count + 1);
        }
    };
    const restar = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };
    const agregar = () => {
        alert(count)
    };
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={restar}>-</button>
        <button onClick={agregar}>agregar</button>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount