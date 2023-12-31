import {createStore} from 'redux';
import cartReducer from './cartReducer';

const store = createStore(cartReducer);
// const store = {
//     _state: {
//         goods: [
//             {img: telephone, name: "F&A phone", price: "999$", id: 1, slug: "fa-phone", description: "OPPO Reno 8 Pro - Smartphone 5 G - 8 Go RAM + 256 Go - Triple Capteur Photo 64 MP, Frontal 32 MP - Écran AMOLED 120 Hz 6,7” - Batterie 4500 mAh + Charge Rapide 80W - Noir Glacé"},
//             {img: computer, name: "F&A computer", price: "1700$", id: 2, slug: "fa-computer", description: "DELL Optiplex 7020 SFF Ordinateur de bureau, ultra rapide, avec processeur Intel i7-4770K, 16 Go de RAM DDR3, 480 Go de disque SSD"},
//             {img: monitor, name: "F&A monitor", price: "200$", id: 3, slug: "fa-monitor", description: "KOORUI Écran PC 24 Pouces Full HD (1920 x 1080), IPS, 16:9, 75Hz, 5ms, VGA et HDMI, Mode Faible lumière Bleue, Grand angle de vue 178°"},
//             {img: airpods, name: "F&A Airpods", price: "300$", id: 4, slug: "fa-airpods", description: "Apple Airpods Pro (2ᵉ génération) ​​​​​​​avec boîtier de Charge MagSafe (2022)"}
//         ],
//         cart: []
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this._state.cart = cartReducer(this._state.cart, action);
//         renderTree();  
//     }
// }
export default store;