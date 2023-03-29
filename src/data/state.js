import telephone from '../images/F&A Phone.png';
import monitor from '../images/Computer monitor.jpg';
import computer from '../images/F&A Computer.png';
import airpods from '../images/AirPods.jpg';
import {renderTree} from '../index';

const store = {
    state: {
        goods: [
            {img: telephone, name: "F&A phone", price: "999$", id: 1},
            {img: computer, name: "F&A computer", price: "1700$", id: 2},
            {img: monitor, name: "F&A monitor", price: "200$", id: 3},
            {img: airpods, name: "F&A Airpods", price: "300$", id: 4}
        ],
        cart: []
    },
    addGoodInCart(img, name, price) {
        const newGood = { 
            img: img,
            name: name,
            price: price,
            id: 5,
        }
        this.state.cart.push(newGood);
    },
    deleteGoodInCart(id) {
        this.state.cart = this.state.cart.filter((good) => {
            return good.id !== id;
        });
        renderTree();  
    }
}
export default store;