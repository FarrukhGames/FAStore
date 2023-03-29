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
    return(
        <div className="link">     
            <NavLink to={link} className="link">
                <div className="good">
                    <img src={props.img}/>
                    <b>{props.name}</b>
                    <p>{props.price}</p>
                </div>
            </NavLink>
            <button onClick={removeGood}>Удалить</button>
        </div>
    )
}

export default Good; 