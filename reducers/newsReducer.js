import {
    GETTING_NEWS,
    GOT_NEWS,
    NO_NEWS,
    SET_FILTER,
    SET_CATEGORY,
    FILTERED_ARTICLES,
} from "./../actions/types";

const initialState = {
    articles: [],
    filter: "",
    category: "general",
    fetchingNews: false,
    noNews: false,
    lastFilter: "",
    filteredArticles: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_NEWS:
            return {
                ...state,
                fetchingNews: true,
                no_news: false,
                lastFilter: action.payload
            }
        
        case GOT_NEWS:
            console.log("GOT NEWS")
            return {
                ...state,
                fetchingNews: false,
                articles: action.payload,
                filteredArticles: action.payload,
                noNews: false
            }

        case NO_NEWS:
            return {
                ...state,
                noNews: true,
                lastFilter: action.payload
            }

        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }

        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        case FILTERED_ARTICLES:
            return {
                ...state,
                filteredArticles: action.payload
            }

        default: {
            return state;
        }
    }
}

export default newsReducer;