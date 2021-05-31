import { createStore } from 'redux';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = true;
        default:
            break;
    }
}

const store = createStore(reducer);

export default store;