import React, { Component } from 'react';
import { connect } from "react-redux";
import { FlatList, View, Text, Image, StyleSheet, Dimensions, TouchableHighlight, ActivityIndicator } from "react-native";
import { withNavigation } from 'react-navigation';


import newsArticleImagePlaceholder from "./../assets/newsArticleImagePlaceholder.jpg";

const screenHeight = Math.round(Dimensions.get('window').height);

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
        this.onArticleClick = this.onArticleClick.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }



    onArticleClick(item) {
        let lastHyphenIndex = item.title.lastIndexOf("-");
        var title = item.title;
        if (title.indexOf("-") != -1) {
            // if title includes a hypden we only want to get the title part not the source part
            var title = title.substring(0, lastHyphenIndex).trim();
        }
        this.props.navigation.navigate("ArticlePage", {
            image: item.urlToImage,
            title: title,
            author: item.source.name,
            description: item.description,
            publishedAt: item.publishedAt
        })
    }

    formatDate(dateString) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var date = new Date(dateString);
        // var todayDate = new Date();
        // var hourDiff = todayDate.getHours() - date.getHours();
        // var sameDay = date.getFullYear() === todayDate.getFullYear() && date.getMonth() === todayDate.getMonth() && date.getDate() === todayDate.getDate();
        var monthNum = date.getMonth();
        var monthString = months[monthNum];
        var hours = date.getHours();
        var amOrPm = hours < 12 ? "AM" : "PM";
        hours = hours > 12 ? hours - 12 : hours;
        var minutes = date.getMinutes();
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        // return `${sameDay ? `${hourDiff} hours ago` : `${date.getDate()} ${monthString}  ${date.getFullYear()}  -  ${hours}:${minutes} ${amOrPm}`}`;
        return [`${date.getDate()} ${monthString} ${date.getFullYear()}`, `${hours}:${minutes} ${amOrPm}`]
    }

    renderItem({ item }) {
        let title = item.title;
        let lastHyphenIndex = title.lastIndexOf("-");
        var articleTitle = item.title;
        if (title.indexOf("-") != -1) {
            // if title includes a hypden we only want to get the title part not the source part
            var articleTitle = articleTitle.substring(0, lastHyphenIndex).trim();
        }
        itemImageSource = item['urlToImage'] ? { uri: item.urlToImage } : newsArticleImagePlaceholder;
        var datetime = this.formatDate(item.publishedAt);
        return (
            <TouchableHighlight
                style={styles.wrapper}
                onPress={() => { this.onArticleClick(item) }}
                underlayColor='rgba(0,0,0,0.2)'>

                <View style={styles.articleContainer}>
                    <View style={styles.thumbnailWrapper}>
                        <Image
                            source={itemImageSource}
                            style={styles.thumbnail}
                        />
                    </View>
                    <View style={styles.textWrapper}>
                        <View>
                            <Text style={styles.titleText}>{articleTitle}</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={styles.subText}>{datetime[0]}</Text>
                            <View style={{ height: 3, width: 3, borderRadius: 50, backgroundColor: 'grey', marginHorizontal: 4, marginTop: 3 }}></View>
                            <Text style={styles.subText}>{datetime[1]}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        console.log('fitler:', this.props.filter)
        const error_404 = (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, fontFamily: "OpenSans-Regular", paddingHorizontal: 30, marginTop: 15 }}>
                    Sorry, we couldn't find any results for:
                </Text>
                <Text style={{ fontSize: 18, fontFamily: "OpenSans-Regular", paddingHorizontal: 30, marginTop: 15 }}>
                    {this.props.filter}
                </Text>
                <Image source={require('./../assets/404.gif')} style={{
                    flex: 1,
                    width: undefined,
                    height: undefined
                }}
                    resizeMode="contain" />
            </View>
        );
        let articles = this.props.filteredArticles.length === 0 ?
            (error_404) :
            (<FlatList style={styles.container}
                data={this.props.filteredArticles}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={item => item.title}
            />)
        return articles;
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.news.articles,
        loading: state.news.loading,
        noNews: state.news.noNews,
        filter: state.news.filter,
        lastFilter: state.news.lastFilter,
        filteredArticles: state.news.filteredArticles,
        fetchingNews: state.news.fetchingNews
    }
}

export default withNavigation(connect(mapStateToProps, {  })(ArticleList));

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        marginVertical: 10
    },
    articleContainer: {
        width: '100%',
        height: 0.20 * screenHeight,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: "center",
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingHorizontal: 15,
        elevation: 5,
    },
    thumbnailWrapper: {
        backgroundColor: 'white',
        height: '60%',
        aspectRatio: 1,
        elevation: 24,
        borderRadius: 15
    },
    thumbnail: {
        flex: 1,
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
    },
    textWrapper: {
        flex: 1,
        flexDirection: "column",
        height: '60%',
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'flex-start',
        paddingVertical: 5,
    },
    titleText: {
        fontFamily: "PlayfairDisplay-Black",
        fontSize: 15
    },
    subText: {
        marginTop: 3,
        fontFamily: "OpenSans-Regular",
        fontSize: 12,
        color: "grey"
    },
    center: {
        alignItems: 'center',
    },
})