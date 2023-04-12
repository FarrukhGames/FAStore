import {NavLink} from 'react-router-dom';
import store from '../data/state';
import {deleteGoodInCartAC} from '../data/state';
import {addGoodInCartAC} from '../data/state';
const Good = function(props) {
    const onClickHandler = (event) => {
        event.preventDefault();
        const dispatch = store.dispatch.bind(store);
        dispatch(addGoodInCartAC(props.good));
    } 
    const removeGood = () => {
        const dispatch = store.dispatch.bind(store);
        dispatch(deleteGoodInCartAC(props.id));
    } 
    return(
        <div>
            <div className="good">
                <img src={props.img} alt="товар"/>
                <NavLink to={props.slug} className="link"><b>{props.name}</b></NavLink>               
                <NavLink to={props.slug} className="link link-price">{props.price}</NavLink>
                <button onClick={onClickHandler} className="add-to-cart">Добавить в корзину</button>                
            </div>     
            <button onClick={removeGood} className="delete">Удалить</button>
        </div>
    )
}

export default Good; 