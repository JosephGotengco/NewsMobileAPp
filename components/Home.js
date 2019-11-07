import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import HorizontalCategoryList from "./HorizontalCategoryList";
import ArticleList from "./ArticleList";
import { fetchNews } from '../actions/newsActions';

class Home extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchNews();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar />
                {/* <HorizontalCategoryList /> */}
                {this.props.fetchingNews ? <ActivityIndicator /> : <ArticleList />}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetchingNews: state.news.fetchingNews
    }
}


export default connect(mapStateToProps, { fetchNews })(Home);
