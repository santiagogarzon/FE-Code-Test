import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Cocktail extends React.PureComponent {
    render() {
        const item = this.props.cocktail;

        return (
            <TouchableOpacity
                style={styles.cocktail}
                activeOpacity={0.9}
                onPress={ () => this.props.onPressFunction() }
            >
                <View style={styles.info}>
                    <Text style={styles.cocktailText}>
                        {item.strDrink}
                    </Text>
                </View>
                <View style={styles.cocktailPhoto}>
                    <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cocktail: {
        marginTop: 1,
        marginBottom: 10,
        width: 370,
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
        borderRadius: 5,
    },
    cocktailPhoto: {
        flex: 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    info: {
        height: 130,
        marginLeft: 15,
        flex: 0.55,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 5,
    },
    cocktailText: {
        fontSize: 24,
    }
});

export default Cocktail;
