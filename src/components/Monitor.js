import monitor from '../images/Computer monitor.jpg';
import Good from './Good';
import store from '../data/state'
import CartPanel from './CartPanel';
import {addGoodInCart} from '../data/state';
const Monitor = function(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const dispatch = store.dispatch.bind(store);
        dispatch(addGoodInCart(monitor, "monitor", "200$", 3));
        console.log(store.getState().cart)
    }
    return(
        <div>
            <CartPanel/>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <div className="telephone">
                    <Good img={monitor} name={"monitor"} price={"200$"}/>  
                </div>
                <button type="submit" className="add-to-cart">Добавить в корзину</button>
                <h1>F&A Monitor</h1>
                <h1 className="price">200$</h1>
                <p>KOORUI Écran PC 24 Pouces Full HD (1920 x 1080), IPS, 16:9, 75Hz, 5ms, VGA et HDMI, Mode Faible lumière Bleue, Grand angle de vue 178°</p>
            </form>
        </div>
    )
}

export default Monitor; 