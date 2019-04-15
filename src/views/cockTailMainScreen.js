import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Input } from "react-native-elements";
import _ from "lodash";

import Cocktail  from "../components/cocktail";
import CocktailService from "../services/cocktailService";
import { SEARCH_ICON } from "../assets/icons/index";

class CockTailMainScreen extends React.Component {
    static navigationOptions = {
        title: 'Random drinks 0.1',
        headerRight: (
            <TouchableOpacity onPress={() => alert('ToDo searchbar inside header')}>
                <Image source={SEARCH_ICON} style={{marginRight: 10}} />
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: '#4EBCD1',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: '300',
        }
    };

    state = { 
        cocktails: [],
        fullCocktailsList: [],
        isLoading: true,
        query: ''
    };

    componentDidMount() {
        CocktailService.getCocktails()
            .then(res => {
                this.setState({
                    cocktails: res,
                    fullCocktailsList: res,
                    isLoading: false
                });
            }
        ).catch(err => {        
            alert('HttpErrorResponse: ' + err.error.status)
        });
    }
  
    _keyExtractor = (item, index) => item.idDrink;

    _handleSearch = (text) => {
        const formatQuery = text.toLowerCase();
        const data = _.filter(this.state.fullCocktailsList, cocktails => {
            return CocktailService.contains(cocktails.strDrink, formatQuery);
        })    
        this.setState({ query: text, cocktails: data });
    };

    _renderItem = ({item}) => (
        <Cocktail cocktail={item} onPressFunction={ () => {this._onPressItem(item)} }/>
    );

    _onPressItem = (item) => {
        this.props.navigation.push('Details', {
            drinkId: item.idDrink,
            drinkStr: item.strDrink
        });
    };

    render() {
        if(this.state.isLoading){
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="white" />            
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Input
                        placeholder='Type Here...'
                        onChangeText={this._handleSearch}
                        inputContainerStyle={styles.input}
                        inputStyle={styles.inputText}
                    />
                    <FlatList 
                        data={this.state.cocktails}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        showsHorizontalScrollIndicator={false}            
                        initialNumToRender={15}
                        maxToRenderPerBatch={15}
                        removeClippedSubviews
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#4EBCD1",
        flex: 1,
        justifyContent: "center",
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderRadius: 3,
        height: 50,
        marginBottom: 5,
        shadowColor: 'black',
        width: 380,
    },
    inputText: {
        color: 'white'
    }
});

export default CockTailMainScreen;
