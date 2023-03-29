import store from '../data/state';
import Good from './Good';
const Menu = function(props) {
    return(
        <div className="menu">
            {store.state.goods.map((element) => {
                return <Good img={element.img} name={element.name} price={element.price} key={element.id} id={element.id}/>  
            })}
        </div>
    )
}

export default Menu; 