const initialState = {
    allContact: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_CONTACT" :
            return {...state, allContact:action.payload}   
        default:
            return state;
    }
}

export default contactReducer;