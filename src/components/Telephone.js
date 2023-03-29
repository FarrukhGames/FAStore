import telephone from '../images/F&A Phone.png';
import Good from './Good';
import store from '../data/state'
const Telephone = function(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        store.addGoodInCart(telephone, "telephone", "999$");
        console.log(store.state.cart)
    }
    return(
        <div>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <div className="telephone">
                    <Good img={telephone} name={"telephone"} price={"999$"}/>  
                </div>
                <button type="submit">Добавить в корзину</button>
                <h1>F&A Smartphone 1</h1>
                <h1 className="price">999$</h1>
                <p>OPPO Reno 8 Pro - Smartphone 5 G - 8 Go RAM + 256 Go - Triple Capteur Photo 64 MP, Frontal 32 MP - Écran AMOLED 120 Hz 6,7” - Batterie 4500 mAh + Charge Rapide 80W - Noir Glacé</p>
            </form>
        </div>
    )
}

export default Telephone; 