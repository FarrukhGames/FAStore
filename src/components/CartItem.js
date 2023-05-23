import {useDispatch, useSelector} from 'react-redux';
import {deleteGoodInCartAC} from '../data/cartReducer';
import {addGoodInDeferredAC} from '../data/cartReducer';
import {addNumberAC} from '../data/cartReducer';
import {minusNumberAC} from '../data/cartReducer';
import './CartItem.css';
const CartItem = (props) => {
    // let [number, setNumber]= useState(1);
    const dispatch = useDispatch();
    const removeGood = () => {
        dispatch(deleteGoodInCartAC(props.id));
    }
    const deferrededGood = () => {
        dispatch(deleteGoodInCartAC(props.id));
        dispatch(addGoodInDeferredAC(props.good));
    }
    const plusGood = () => {
        dispatch(addNumberAC(props.id));
    }
    const minusGood = () => {
        dispatch(minusNumberAC(props.id));
    }
    return (
        <article className="cart-item">
            <img src={props.img}/>
            <h2 className="cart-item__title">{props.name}</h2>
            <p className="cart-item__price">{props.price}</p>
            <button className="cart-item__minus" onClick={minusGood}>-</button>
            <p className="cart-item__number">{props.number}</p>
            <button className="cart-item__plus" onClick={plusGood}>+</button>
            <button onClick={removeGood} className="cart-item__delete button">Удалить</button>
            <button onClick={deferrededGood} className="cart-item__postpone button">Отложить</button>
        </article>
    )
}

export default CartItem;