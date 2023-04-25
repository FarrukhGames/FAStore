import {deleteGoodInCartAC} from '../data/cartReducer';
import store from '../data/state';
import './CartItem.css';
import {useState} from 'react';
const CartItem = (props) => {
    let [number, setNumber]= useState(1);
    const removeGood = () => {
        const dispatch = store.dispatch.bind(store);
        dispatch(deleteGoodInCartAC(props.id));
    }
    const minusGood = () => {
        setNumber(number - 1);
        if (number === 1) {
            const dispatch = store.dispatch.bind(store);
            dispatch(deleteGoodInCartAC(props.id));
        }
    }
    const plusGood = () => {
        setNumber(number + 1);
    }
    return (
        <article className="cart-item">
            <img src={props.img}/>
            <h2 className="cart-item__title">{props.name}</h2>
            <p className="cart-item__price">{props.price}</p>
            <button className="cart-item__minus" onClick={minusGood}>-</button>
            <p className="cart-item__number">{number}</p>
            <button className="cart-item__plus" onClick={plusGood}>+</button>
            <button onClick={removeGood} className="cart-item__delete button">Удалить</button>
            <button className="cart-item__postpone button">Отложить</button>
        </article>
    )
}

export default CartItem;