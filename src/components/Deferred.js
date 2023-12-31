import {useDispatch, useSelector} from 'react-redux';
import DeferredItem from './DeferredItem';
const Deferred = (props) => {
    const dispatch = useDispatch();
    const deferred = useSelector((state) => {
       return state.deferred
    })
    return (
        <div className="cart">
            {deferred.map((element) => {
                return <DeferredItem good={element} img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Deferred;