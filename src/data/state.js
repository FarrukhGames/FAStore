import telephone from '../images/F&A Phone.png';
import monitor from '../images/Computer monitor.jpg';
import computer from '../images/F&A Computer.png';
import airpods from '../images/AirPods.jpg';

const store = {
    state: {
        goods: [
            {img: telephone, name: "F&A phone", price: "999$", id: 1},
            {img: computer, name: "F&A computer", price: "1700$", id: 2},
            {img: monitor, name: "F&A monitor", price: "200$", id: 3},
            {img: airpods, name: "F&A Airpods", price: "300$", id: 4}
        ]
    }
}
export default store;