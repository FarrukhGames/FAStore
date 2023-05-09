import cartImg from "../images/Cart.png";
import {useSelector} from 'react-redux';
const CartPanel = function(props) {
    const cart = useSelector((state) => {
        return state.cart
    });
    return(
        <div className="cart-panel">
            <h1>Ваша Корзина</h1>
            <p>{cart.length}</p>
            <img src={cartImg} alt="Корзина"/>
        </div>
    )
}

export default CartPanel; 