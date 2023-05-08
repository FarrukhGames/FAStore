import {NavLink} from 'react-router-dom';
import {addGoodInCartAC} from '../data/cartReducer';
import {useDispatch, useSelector} from 'react-redux';
const Good = function(props) {
    let dispatch = useDispatch();
    const onClickHandler = (event) => {
        event.preventDefault();
        dispatch(addGoodInCartAC(props.good));
    } 
    return(
        <div>
            <div className="good">
                <img src={props.img} alt="товар"/>
                <NavLink to={props.slug} className="link"><b>{props.name}</b></NavLink>               
                <NavLink to={props.slug} className="link link-price">{props.price}</NavLink>
                <button onClick={onClickHandler} className="add-to-cart">Добавить в корзину</button>                
            </div>     
        </div>
    )
}

export default Good; 