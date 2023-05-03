import store from '../data/state';
import CartItem from './CartItem';
const Cart = function(props) {
    return(
        <div className="cart">
            {store.getState().cart.map((element) => {
                return <CartItem img={element.img} name={element.name} price={element.price} number={element.number} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Cart; 