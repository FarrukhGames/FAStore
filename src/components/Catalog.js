import store from '../data/state';
import Good from './Good';
import CartPanel from './CartPanel';
const Catalog = function(props) {
    return(
        <div className="catalog">
            <CartPanel/>
            {store.getState().goods.map((element) => {
                return <Good img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Catalog; 