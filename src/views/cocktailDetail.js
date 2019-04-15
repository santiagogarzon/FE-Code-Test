import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";

import CocktailService from "../services/cocktailService";

class CockTailDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('drinkStr', 'Cocktail Detail'),
            headerStyle: {
                backgroundColor: '#4EBCD1',
                borderBottomWidth: 0,
                shadowColor: 'transparent',
                elevation: 0,
            },
            headerTitleStyle: {
                color: 'white',
                fontWeight: '300',
            },
            headerTintColor: 'white'
        }
    };

    state = {
        cocktail: [],
        isLoading: true 
    };
  
    componentDidMount() {        
        const itemId = this.props.navigation.getParam('drinkId');

        CocktailService.getCocktail(itemId)
            .then(res => {
                this.setState({
                    cocktail: res,
                    isLoading: false
                });
            }
            ).catch(err => {        
                alert('HttpErrorResponse: ' + err.error.status)
            });
    }

    render() {
        const { cocktail, isLoading } = this.state;
        const ingredientsArr = [];
        let indexIngredient = 'strIngredient';

        Array(15)
            .fill()
            .map((_, i) => ingredientsArr.push(cocktail[indexIngredient + (i + 1)]));

        if (isLoading) {
            return (
                <View style={styles.container}>                
                    <ActivityIndicator size="large" color="white" />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Image
                            resize="cover"
                            style={styles.image}
                            source={{ uri: cocktail.strDrinkThumb }}
                        />
                        <View style={styles.textContent}>
                            <View style={styles.listContainer}>
                                {ingredientsArr
                                    .filter(item => item != null)
                                    .filter(item => item.length > 0)
                                    .map(item => {
                                        return (
                                            <Text key={item} style={styles.textList}>
                                                {item}
                                            </Text>
                                        );
                                    })}
                            </View>
                            <Text style={styles.textTitle}>
                            {'\u2022'} How to prepare
                            </Text>
                            <Text style={styles.textTitle}>
                                {cocktail.strInstructions}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4EBCD1",
        justifyContent: 'center'
    },
    textTitle: {
        textAlign: 'left',
        color: '#9E9E9E',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    },
    listContainer: {
        marginBottom: 10
    },
    textList: {
        marginLeft: 15,
        marginRight: 15,
        color: '#9E9E9E',
        fontSize: 16,
    },
    textContent: {
        flex: 1,
        alignItems: 'flex-start'
    },
    image: {
        width: 360,
        height: 280,
        marginTop: 15,
        marginBottom: 10
    },
    card: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        marginTop: 0,
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        shadowColor: 'rgba(74,74,74,0.78)',
        shadowOffset: {
            width: 2,
            height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
});

export default CockTailDetail;