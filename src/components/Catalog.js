import Good from './Good';
import CartPanel from './CartPanel';
import {useSelector} from 'react-redux';
const Catalog = function(props) {
    const goods = useSelector((state) => {
        return state.goods
    });
    return(
        <div className="catalog">
            <CartPanel/>
            {goods.map((element) => {
                return <Good good={element} img={element.img} name={element.name} price={element.price} key={element.id} id={element.id} slug={element.slug}/>  
            })}
        </div>
    )
}

export default Catalog; 