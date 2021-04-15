import {
    action_types
} from '../actions/constants';

const defaultState = {
    data: [],
    message: null,
    status: null
}

const initialState = {
    loader: false,
};

const LayoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_types.LOADER: {
            return {
                ...state, loader: action.payload
            }
        }
        default: {
            return state;
        }
    }
};


export default LayoutReducer;