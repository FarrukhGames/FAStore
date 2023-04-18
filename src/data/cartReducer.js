const ADD_GOOD = "ADD_GOOD"
const DELETE_GOOD = "DELETE_GOOD"
const cartReducer = (state, action) => {
    switch(action.type) {
        case ADD_GOOD: 
            state.push(action.good);
            break;
        case DELETE_GOOD:
            state = state.filter((good) => {
                return good.id !== action.id;
            });
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

export default cartReducer;