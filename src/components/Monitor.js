import monitor from '../images/Computer monitor.jpg';
import Good from './Good';
import store from '../data/state'
const Monitor = function(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        store.addGoodInCart(monitor, "monitor", "200$");
        console.log(store.state.cart)
    }
    return(
        <div>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <div className="telephone">
                    <Good img={monitor} name={"monitor"} price={"200$"}/>  
                </div>
                <button type="submit">Добавить в корзину</button>
                <h1>F&A Monitor</h1>
                <h1 className="price">200$</h1>
                <p>KOORUI Écran PC 24 Pouces Full HD (1920 x 1080), IPS, 16:9, 75Hz, 5ms, VGA et HDMI, Mode Faible lumière Bleue, Grand angle de vue 178°</p>
            </form>
        </div>
    )
}

export default Monitor; 