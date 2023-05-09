import CartItem from './CartItem';
import {useSelector} from 'react-redux';
const Cart = function(props) {
    const cart = useSelector((state) => {
       return state.cart
    })
    return(
        <div className="cart">
            {cart.map((element) => {
                return <CartItem img={element.img} name={element.name} price={element.price} number={element.number} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Cart; 