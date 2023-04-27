const ADD_GOOD = "ADD_GOOD";
const DELETE_GOOD = "DELETE_GOOD";
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
const cartReducer = (state, action) => {
    switch(action.type) {
        case ADD_GOOD: 
            let newGood = {...action.good, number: 1};
            state.push(newGood);
            console.log(newGood);
            break;
        case DELETE_GOOD:
            state = state.filter((good) => {
                return good.id !== action.id;
            });
            break;
        case ADD_NUMBER: 
            const goodPlus = state.find((element) => {
                return element.id === action.id;
            });
            goodPlus.number++;
            break;
        case MINUS_NUMBER: 
            const goodMinus = state.find((element) => {
                return element.id === action.id;
            });
            goodMinus.number = goodMinus.number - 1;
            break;
        default: 
            console.log("Ошибка");
            break;
    }
    return state;
}
export const addGoodInCartAC = (good) => {
    const action = {
        type: ADD_GOOD, 
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