import store from '../data/state';
import Good from './Good';
import CartPanel from './CartPanel';
const Catalog = function(props) {
    console.log(store.getState());
    return(
        <div className="catalog">
            <CartPanel/>
            {store.getState().goods.map((element) => {
                return <Good good={element} img={element.img} name={element.name} price={element.price} key={element.id} id={element.id} slug={element.slug}/>  
            })}
        </div>
    )
}

export default Catalog; 