import telephone from '../images/F&A Phone.png';
import Good from './Good';
import store from '../data/state'
import CartPanel from './CartPanel';
import {addGoodInCartAC} from '../data/state';
const Telephone = function(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const dispatch = store.dispatch.bind(store);
        dispatch(addGoodInCartAC(telephone, "telephone", "999$", 1));
        console.log(store.getState().cart)
    }
    return(
        <div>
            <CartPanel/>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <div className="telephone">
                    <Good img={telephone} name={"telephone"} price={"999$"}/>  
                </div>
                <button type="submit" className="add-to-cart">Добавить в корзину</button>
                <h1>F&A Smartphone 1</h1>
                <h1 className="price">999$</h1>
                <p>OPPO Reno 8 Pro - Smartphone 5 G - 8 Go RAM + 256 Go - Triple Capteur Photo 64 MP, Frontal 32 MP - Écran AMOLED 120 Hz 6,7” - Batterie 4500 mAh + Charge Rapide 80W - Noir Glacé</p>
            </form>
        </div>
    )
}

export default Telephone; 