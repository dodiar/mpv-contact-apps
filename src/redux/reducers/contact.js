const initialState = {
    allContact: [],
    categoryContact: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_CONTACT" :
            return {...state, allContact:action.payload}
        case "CATEGORY_CONTACT" :
            return {...state, categoryContact:action.payload}   
        default:
            return state;
    }
}

export default contactReducer;