import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import store from '../data/state';
import CartPanel from './CartPanel';
import {addGoodInCartAC} from '../data/cartReducer';
const SingleGood = function(props) {
    let params = useParams();
    let dispatch = useDispatch();
    console.log(params.product);
    let good = store.getState().goods.find((product) => {
        return product.slug === params.product;
    });
    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addGoodInCartAC(good));
    }
    return(
        <div>
            <CartPanel/>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <img src={good.img} alt="товар"/>
                <button type="submit" className="add-to-cart">Добавить в корзину</button>
                <h1>{good.name}</h1>
                <h1 className="price">{good.price}</h1>
                <p>{good.description}</p>
            </form>
        </div>
    )
}

export default SingleGood; 