import Good from './Good';
import store from '../data/state';
const Cart = function(props) {
    return(
        <div className="cart">
             {store.state.cart.map((element) => {
                return <Good img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Cart; 