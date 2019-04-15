import axios from 'axios';

export default class CocktailService{
    static getCocktails() {
        return axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
        .then(res => {
            return res.data.drinks;
        })
        .catch(err => {
            return err;
        })
    }

    static getCocktail(id) {
        return axios.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(res => {
            return res.data.drinks[0];
        })        
        .catch(err => {
            return err;
        })
    }

    static contains(name, query) {
        name = name.toLowerCase();
        if(name.includes(query)) {
            return true;
        }

        return false;
    }
}
