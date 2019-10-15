import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_FAILURE,
    POST_SUCCESS
} from '../actions/actions'

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
    isPosting: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: null,
                isFetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload],
                isFetching: false
            }
            case FETCH_FAILURE:
                    return {
                        ...state,
                        error: action.payload,
                        isFetching: false
                    }    
            case POST_START:
                    return {
                        ...state,
                        isPosting: true,
                        error: null
                    };
            case POST_SUCCESS:
                    return {
                        ...state,
                        smurf: [...action.payload],
                        isPosting: false
                    }
            case POST_FAILURE:
                    return {
                        ...state,
                        isPosting: false,
                        error: action.payload
                    }
            default:
                return state;
    }
}

export default reducer;