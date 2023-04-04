import computer from '../images/F&A Computer.png';
import Good from './Good';
import store from '../data/state'
import CartPanel from './CartPanel';
import {addGoodInCartAC} from '../data/state';
const Computer = function(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const dispatch = store.dispatch.bind(store);
        dispatch(addGoodInCartAC(computer, "computer", "1700$", 2));
        console.log(store.getState().cart)
    }
    return(
        <div>
            <CartPanel/>
            <form className="telephone-div" onSubmit={onSubmitHandler}>
                <div className="telephone">
                    <Good img={computer} name={"computer"} price={"1700$"}/>  
                </div>
                <button type="submit" className="add-to-cart">Добавить в корзину</button>
                <h1>F&A Computer</h1>
                <h1 className="price">1700$</h1>
                <p>DELL Optiplex 7020 SFF Ordinateur de bureau, ultra rapide, avec processeur Intel i7-4770K, 16 Go de RAM DDR3, 480 Go de disque SSD</p>
            </form>
        </div>
    )
}

export default Computer; 