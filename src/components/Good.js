import {NavLink} from 'react-router-dom';
import telephone from '../images/F&A Phone.png';
import monitor from '../images/Computer monitor.jpg';
import computer from '../images/F&A Computer.png';
import airpods from '../images/AirPods.jpg';
import store from '../data/state';
let link;
const Good = function(props) {
    if (props.img === telephone) {
        link = "/telephone";
    } else if (props.img === computer) {
        link = "/computer";
    } else if (props.img === monitor) {
        link = "/monitor";
    } else if (props.img === airpods) {
        link = "/airpods";
    } 
    const removeGood = () => {
        store.deleteGoodInCart(props.id);
    } 
    const onClickHandler = (event) => {
        event.preventDefault();
        store.addGoodInCart(props.img, props.name, props.price, props.id);
        alert("Товар добавлен в корзину");
        console.log(store.state.cart)
    }
    return(
        <div className="link">     
            <div className="good">
                <img src={props.img}/>
                <NavLink to={link} className="link"><b>{props.name}</b></NavLink>
                <button type="button" onClick={onClickHandler} className="add-to-cart">{props.price}</button>
            </div>     
            <button onClick={removeGood} className="delete">Удалить</button>
        </div>
    )
}

export default Good; 