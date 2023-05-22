import CartItem from './CartItem';
import {useSelector} from 'react-redux';
const Cart = function(props) {
    const cart = useSelector((state) => {
       return state.cart
    })
    let button = <button className="cart__button button">Заказать всё</button>
    if (cart.length === 0) {
        button = ""
    }
    return(
        <div className="cart">
            {cart.map((element) => {
                return <CartItem good={element} img={element.img} name={element.name} price={element.price} number={element.number} key={element.id} id={element.id}/>  
            })}
            {button}
        </div>
    )
}

export default Cart; 