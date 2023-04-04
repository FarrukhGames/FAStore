import cartImg from "../images/Cart.png"
import store from '../data/state';
const CartPanel = function(props) {
    console.log(store.getState().cart.length)
    return(
        <div className="cart-panel">
            <h1>Ваша Корзина</h1>
            <p>{store.getState().cart.length}</p>
            <img src={cartImg} alt="Корзина"/>
        </div>
    )
}

export default CartPanel; 