import store from '../data/state';
import Good from './Good';
const Cart = function(props) {
    return(
        <div className="cart">
            {store.getState().cart.map((element) => {
                return <Good img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Cart; 