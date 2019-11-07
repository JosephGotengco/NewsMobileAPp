import React, { Component } from 'react';
import { View, Image, ScrollView, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import UserImage from "./../assets/user.png";

export default class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
        this.state = {
            image: "",
            title: "",
            author: "",
            description: "",
            publishedAt: ""
        }
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

    componentWillMount() {
        const { navigation } = this.props;
        this.setState({
            image: navigation.getParam('image'),
            title: navigation.getParam('title'),
            author: navigation.getParam('author'),
            description: navigation.getParam('description'),
            publishedAt: navigation.getParam('publishedAt')
        })
    }

    render() {
        var datetime = this.formatDate(this.state.publishedAt);
        return (
            <ScrollView style={{ flex: 1, alignSelf: 'stretch' }}>
                <View style={{ width: '100%', height: 300, position: 'relative' }}>
                    <Image
                        source={{ uri: this.state.image }}
                        style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            width: undefined,
                            height: undefined
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 25,
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }} />
                    <View style={{ position: 'absolute', left: '5%', top: '15%' }}>
                        <Ionicons name="md-arrow-back"
                            size={25}
                            color="white" onPress={() => this.props.navigation.goBack()}
                            underlayColor="rgba(0,0,0,0.3)"
                        />
                    </View>

                </View>
                <View style={{ width: '100%', height: 1000, marginTop: -50, borderTopLeftRadius: 50, backgroundColor: 'white', }}>
                    <View style={{
                        paddingHorizontal: 20,
                        marginTop: 20
                    }}>
                        <View>
                            <Text
                                style={{
                                    lineHeight: 30,
                                    fontFamily: "PlayfairDisplay-Black",
                                    fontSize: 22,
                                    color: 'black',
                                    marginVertical: 20
                                }}
                            >{this.state.title}</Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <Image
                                source={UserImage}
                                resizeMode="cover"
                                style={{
                                    width: 20,
                                    height: 20,
                                    padding: 15,
                                    borderRadius: 30,
                                    backgroundColor: "rgba(0,0,0,0.3)"
                                }}
                            />
                            <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                                <Text style={{
                                    fontFamily: "OpenSans-SemiBold",
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: "black",
                                }}>{this.state.author}</Text>
                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <Text style={{
                                        marginTop: 3,
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 12,
                                        color: "grey"
                                    }}>{datetime[0]}</Text>
                                    <View style={{ height: 3, width: 3, borderRadius: 50, backgroundColor: 'grey', marginHorizontal: 4, marginTop: 3 }}></View>
                                    <Text style={{
                                        marginTop: 3,
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 12,
                                        color: "grey"
                                    }}>{datetime[1]}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <View></View>
                            <Text></Text>
                            <Text></Text>
                        </View>
                        <Text
                            style={{
                                lineHeight: 30,
                                fontFamily: "Montserrat-ExtraBold",
                                fontSize: 13
                            }}>
                            {this.state.description}
                        </Text>
                    </View>
                </View>


            </ScrollView>
        );
    }
}
