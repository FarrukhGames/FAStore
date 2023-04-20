import {deleteGoodInCartAC} from '../data/cartReducer';
import store from '../data/state';
import './CartItem.css'
const CartItem = (props) => {
    const removeGood = () => {
        const dispatch = store.dispatch.bind(store);
        dispatch(deleteGoodInCartAC(props.id));
    } 
    return (
        <article className="cart-item">
            <img src={props.img}/>
            <h2 className="cart-item__title">{props.name}</h2>
            <button onClick={removeGood} className="cart-item__delete">Удалить</button>
            <button className="cart-item__postpone">Отложить</button>
            <p className="cart-item__price">{props.price}</p>
            <p className="cart-item__number">{store.getState().cart.length}</p>
        </article>
    )
}

export default CartItem;