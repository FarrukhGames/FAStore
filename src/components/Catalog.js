import store from '../data/state';
import Good from './Good';
const Catalog = function(props) {
    return(
        <div className="catalog">
            {store.state.goods.map((element) => {
                return <Good img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Catalog; 