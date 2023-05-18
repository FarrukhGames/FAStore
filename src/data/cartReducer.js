import telephone from '../images/F&A Phone.png';
import monitor from '../images/Computer monitor.jpg';
import computer from '../images/F&A Computer.png';
import airpods from '../images/AirPods.jpg';
const ADD_GOOD = "ADD_GOOD";
const ADD_DEFERRED = "ADD_DEFERRED";
const DELETE_GOOD = "DELETE_GOOD";
const DELETE_DEFERRED = "DELETE_DEFERRED";
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
const initialState = {
    goods: [
            {img: telephone, name: "F&A phone", price: "999$", id: 1, slug: "fa-phone", description: "OPPO Reno 8 Pro - Smartphone 5 G - 8 Go RAM + 256 Go - Triple Capteur Photo 64 MP, Frontal 32 MP - Écran AMOLED 120 Hz 6,7” - Batterie 4500 mAh + Charge Rapide 80W - Noir Glacé"},
            {img: computer, name: "F&A computer", price: "1700$", id: 2, slug: "fa-computer", description: "DELL Optiplex 7020 SFF Ordinateur de bureau, ultra rapide, avec processeur Intel i7-4770K, 16 Go de RAM DDR3, 480 Go de disque SSD"},
            {img: monitor, name: "F&A monitor", price: "200$", id: 3, slug: "fa-monitor", description: "KOORUI Écran PC 24 Pouces Full HD (1920 x 1080), IPS, 16:9, 75Hz, 5ms, VGA et HDMI, Mode Faible lumière Bleue, Grand angle de vue 178°"},
            {img: airpods, name: "F&A Airpods", price: "300$", id: 4, slug: "fa-airpods", description: "Apple Airpods Pro (2ᵉ génération) ​​​​​​​avec boîtier de Charge MagSafe (2022)"}
        ],
    cart: [],
    deferred: []
}
    
const cartReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case ADD_GOOD: 
            const newGood = {...action.good, number: 1};
            newState.cart = [...newState.cart, newGood];
            if (newGood.id === newGood.id) {
                newGood.number++;
            }
            break;
        case ADD_DEFERRED: 
            if (newState.deferred !== "") {
                const newDeferredGood = {...action.good};
                newState.deferred = [...newState.deferred, newDeferredGood];
            }
            break;
        case DELETE_GOOD:
            newState.cart = newState.cart.filter((good) => {
                return good.id !== action.id;
            });
            newState.cart = [...newState.cart];
            break;
        case DELETE_DEFERRED:
            newState.deferred = newState.deferred.filter((deferredItem) => {
                return deferredItem.id !== action.id;
            });
            newState.deferred = [...newState.deferred];
            break;
        case ADD_NUMBER: 
            const goodPlus = newState.cart.find((element) => {
                return element.id === action.id;
            });
            goodPlus.number = goodPlus.number + 1;
            newState.cart = [...newState.cart];
            break;
        case MINUS_NUMBER: 
            const goodMinus = newState.cart.find((element) => {
                return element.id === action.id;
            });
            goodMinus.number = goodMinus.number - 1;
            newState.cart = [...newState.cart];
            break;
        default: 
            console.log("Ошибка");
            break;
    }
    console.log(newState);
    return newState;
}
export const addGoodInCartAC = (good) => {
    const action = {
        type: ADD_GOOD, 
        good
    }
    return action;
}
export const addGoodInDeferredAC = (good) => {
    const action = {
        type: ADD_DEFERRED, 
        good
    }
    return action;
}
export const deleteGoodInCartAC = (id) => {
    const action = {
        type: DELETE_GOOD, 
        id: id
    }
    return action;
}
export const deleteGoodInDeferredAC = (id) => {
    const action = {
        type: DELETE_DEFERRED, 
        id: id
    }
    return action;
}
export const addNumberAC = (id) => {
    const action = {
        type: "ADD_NUMBER", 
        id: id
    }
    return action;
}
export const minusNumberAC = (id) => {
    const action = {
        type: "MINUS_NUMBER", 
        id: id
    }
    return action;
}
export default cartReducer;