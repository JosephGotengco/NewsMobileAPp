// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { View, FlatList, Text, TouchableHighlight } from 'react-native';
// import { setCategory, fetchNews } from './../actions/newsActions';

// class HorizontalCategoryList extends Component {
//     constructor(props) {
//         super(props);
//         this.onCategoryClick = this.onCategoryClick.bind(this);
//     }

//     onCategoryClick(item) {
//         this.props.setCategory(item.value);
//         this.props.fetchNews(null, false, item.value);
//     }

//     renderItem({ item, index }) {
//         var textColor = this.props.category === item.value ? '#000000' : '#BDBDBD';
//         return (
//             <TouchableHighlight key={index} style={{
//                 flex: 1,
//                 flexDirection: "column",
//                 borderRadius: 25,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: 'center',
//                 marginHorizontal: 10,
//                 position: 'relative',
//                 height: 30,
//             }}
//                 underlayColor='transparent'
//                 onPress={() => { this.onCategoryClick(item) }}>
//                 <View>
//                     <Text style={{ color: textColor, fontFamily: "PlayfairDisplay-Regular", fontSize: 14 }}>{item.title}</Text>
//                     {this.props.category === item.value ? (<View style={{ height: 5, width: 5, borderRadius: 25, backgroundColor: 'black', position: 'absolute', bottom: -5, left: '43.5%' }}></View>) : null}
//                 </View>
//             </TouchableHighlight>
//         )
//     }

//     render() {
//         console.log(this.props.category)
//         return (
//             <View style={{ marginTop: 10, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
//                 <FlatList
//                     data={[{ title: 'All', value: 'general' }, { title: 'Health', value: 'health' }, { title: 'Business', value: 'business' }, { title: 'Science', value: 'science' }, { title: 'Sports', value: 'sports' }, { title: 'Tech', value: 'technology' }, { title: 'Entertainment', value: 'entertainment' }]}
//                     horizontal={true}
//                     showsHorizontalScrollIndicator={false}
//                     renderItem={this.renderItem.bind(this)}
//                     keyExtractor={(item) => item.value}>
//                 </FlatList>
//             </View>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         category: state.news.category
//     }
// }

// export default connect(mapStateToProps, { setCategory, fetchNews })(HorizontalCategoryList);