import {
    GETTING_NEWS,
    GOT_NEWS,
    NO_NEWS,
    SET_FILTER,
    SET_CATEGORY,
    FILTERED_ARTICLES
} from "./types";

export const fetchNews = (filter = null, filtering = false, category = "general") => (dispatch) => {

    dispatch({ type: GETTING_NEWS, payload: filter });
    if (filtering) {
        var end_point = `everything?q=${filter}`;
    } else {
        var end_point = `top-headlines?country=ca&category=${category}`;
    }
    // fetch(`https://newsapi.org/v2/${end_point}&apiKey=5a00ecbf0125488c99f75b0217ef9b51`)
    fetch(`https://newsapi.org/v2/everything?q=Canada&pageSize=100&page=1&apiKey=fd6f17e16b2645658d903117c6ddcc3f`)
        .then(response => response.json())
        .then(response => {
            if (response.articles.length == 0) {
                dispatch({ type: NO_NEWS, payload: filter })
            } else {
                dispatch({
                    type: GOT_NEWS,
                    payload: response.articles
                })
            }
        })
}

export const setFilter = (filter) => (dispatch) => {
    dispatch({ type: SET_FILTER, payload: filter });
}

export const setCategory = (category) => (dispatch) => {
    dispatch({ type: SET_CATEGORY, payload: category });
}

export const filterExistingArticles = (filter = null, articles = []) => (dispatch) => {
    if (filter) {
        let fitleredArticles = articles.filter((article) => {
            let { title, author, description, content } = article;
            const articleText = `${title} ${author} ${description} ${content}`.toLowerCase();
            console.log(articleText);
            return articleText.indexOf(filter.toLowerCase()) > -1;
        });
        console.log(fitleredArticles)
        dispatch({ type: FILTERED_ARTICLES, payload: fitleredArticles });
    } else {
        dispatch({ type: FILTERED_ARTICLES, payload: articles });
    }
}