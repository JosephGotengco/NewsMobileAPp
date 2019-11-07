import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import { fetchNews, setFilter, filterExistingArticles } from '../actions/newsActions';

class SearchBar extends Component {
    onChangeText = (filter) => {
        this.props.setFilter(filter);
        this.props.filterExistingArticles(filter, this.props.articles)
    }

    onSubmit = () => {
        // let filter = this.props.filter;
        // if (filter == null || filter == "") {
        //     this.props.fetchNews()
        // } else {
        //     let filters = filter.replace(" ", "+");
        //     this.props.fetchNews(filters, true)
        // }
    }

    render() {
        let value = this.props.filter;
        return (
            <View style={styles.wrapper}>
                <View style={styles.searchSection}>
                    <TextInput
                        autoCorrect={true}
                        style={styles.textInput}
                        onChangeText={filter => this.onChangeText(filter)}
                        onSubmitEditing={this.onSubmit}
                        value={value}
                    />
                    <Ionicons name="md-search" size={25} color='black' iconStyle={styles.icon}/>
                    {/* <Icon name="search" type="material" color="black" containerStyle={styles.icon} /> */}
                </View>
                <View style={{ marginTop: 5, paddingHorizontal: 35 }}>
                    {this.props.lastFilter && !this.props.noNews ? (<Text>Results for {this.props.lastFilter}</Text>) : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
    },
    textInput: {
        width: '85%'
    },
    searchSection: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: "75%",
        borderRadius: 25,
        elevation: 5,
        marginTop: 50,
        padding: 10,
        paddingLeft: 20,
        backgroundColor: 'white',
        fontFamily: "Montserrat-ExtraBold",
    },
    icon: {
        right: '5%',
        padding: 5,
    }
})

const mapStateToProps = (state) => {
    return {
        articles: state.news.articles,
        filter: state.news.filter,
        lastFilter: state.news.lastFilter,
        noNews: state.news.noNews
    }
}

export default connect(mapStateToProps, { fetchNews, setFilter, filterExistingArticles })(SearchBar);