import store from '../data/state';
import Good from './Good';
import CartItem from './CartItem';
import img from '../images/F&A Phone.png'
const Cart = function(props) {
    return(
        <div className="cart">
            {store.getState().cart.map((element) => {
                return <CartItem img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Cart; 