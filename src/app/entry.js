const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};


const d = userReducer(undefined, {});
console.log(d);
console.log(userReducer(d, {type: "SET_NAME", payload: "TEAST"}));