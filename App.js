
import { createStackNavigator, createAppContainer } from "react-navigation";
import CockTailMainScreen from "./src/views/cockTailMainScreen";
import CocktailDetail from "./src/views/cocktailDetail";

const AppNavigator = createStackNavigator(
    {
        Home: CockTailMainScreen,
        Details: CocktailDetail
    },
    { 
        headerLayoutPreset: 'center',
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
