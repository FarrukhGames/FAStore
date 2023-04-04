import telephone from '../images/F&A Phone.png';
import monitor from '../images/Computer monitor.jpg';
import computer from '../images/F&A Computer.png';
import airpods from '../images/AirPods.jpg';
import {renderTree} from '../index';

const store = {
    _state: {
        goods: [
            {img: telephone, name: "F&A phone", price: "999$", id: 1},
            {img: computer, name: "F&A computer", price: "1700$", id: 2},
            {img: monitor, name: "F&A monitor", price: "200$", id: 3},
            {img: airpods, name: "F&A Airpods", price: "300$", id: 4}
        ],
        cart: []
    },
    getState() {
        return this._state;
    },
    deleteGoodInCart(id) {
        this._state.cart = this._state.cart.filter((good) => {
            return good.id !== id;
        });
        renderTree();  
    },
    dispatch(action) {
        switch(action.type) {
            case "ADD_GOOD": 
                const newGood = { 
                    img: action.img,
                    name: action.name,
                    price: action.price,
                    id: action.id
                }
                this._state.cart.push(newGood);
                renderTree();  
                break;
            case "DELETE_GOOD":
                this._state.cart = this._state.cart.filter((good) => {
                    return good.id !== action.id;
                });
                renderTree();
                break;
            default: 
                console.log("Ошибка");
                break;
        }
    }
}
export const addGoodInCart = (img, name, price, id) => {
    const action = {
        type: "ADD_GOOD", 
        img: img,
        name: name,
        price: price,
        id: id
    }
    return action;
}
export const deleteGoodInCart = (id) => {
    const action = {
        type: "DELETE_GOOD", 
        id: id
    }
    return action;
}
export default store;