import {useDispatch} from 'react-redux';
import {addGoodInCartAC} from '../data/cartReducer';
import {deleteGoodInDeferredAC} from '../data/cartReducer';
const DeferredItem = (props) => {
    const dispatch = useDispatch();
    const removeDeferred = () => {
        dispatch(deleteGoodInDeferredAC(props.id));
        dispatch(addGoodInCartAC(props.good));
    }
    return (
        <article className="deferred-item">
            <img src={props.img}/>
            <h2 className="deferred-item__title">{props.name}</h2>
            <p className="deferred-item__price">{props.price}</p>
            <button onClick={removeDeferred} className="deferred-item__delete button">Убрать из отложенного</button>
        </article>
    )
}

export default DeferredItem;