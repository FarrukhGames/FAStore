import airpods from '../images/AirPods.jpg';
import Good from './Good';
import store from '../data/state'
const Monitor = function(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        store.addGoodInCart(airpods, "airpods", "300$",4);
        alert("Товар добавлен в корзину");
        console.log(store.state.cart)
    }
    return(
        <div>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <div className="telephone">
                    <Good img={airpods} name={"airpods"} price={"300$"}/>  
                </div>
                <button type="submit" className="add-to-cart">Добавить в корзину</button>
                <h1>F&A airpods</h1>
                <h1 className="price">300$</h1>
                <p>Apple Airpods Pro (2ᵉ génération) ​​​​​​​avec boîtier de Charge MagSafe (2022)</p>
            </form>
        </div>
    )
}

export default Monitor; 