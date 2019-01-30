import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles:[],
    message: null,
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload),
            message: "Successfully added"
        });
    }

    if (action.type === FOUND_BAD_WORD) {
        return Object.assign({}, state, {
            message: "Bad word found please check"
        });
    }

    if (action.type === DATA_LOADED){
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload),
        });
    }

    return state;
}

export default rootReducer