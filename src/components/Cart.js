import Good from './Good';
import telephone from '../images/F&A Phone.png';
import computer from '../images/F&A Computer.png';
const Cart = function(props) {
    return(
        <div className="cart">
            <Good img={telephone} name={"telephone"} price={"999$"}/>  
            <Good img={computer} name={"computer"} price={"1700$"}/>  
        </div>
    )
}

export default Cart; 