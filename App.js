
import { createStackNavigator, createAppContainer } from "react-navigation";
import CockTailMainPage from "./src/views/cockTailMainPage";
import CocktailDetail from "./src/views/cocktailDetail";

const AppNavigator = createStackNavigator(
    {
        Home: CockTailMainPage,
        Details: CocktailDetail
    },
    { 
        headerLayoutPreset: 'center',
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
