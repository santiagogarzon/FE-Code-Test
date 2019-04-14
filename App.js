
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/views/homeScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, { headerMode: 'none'});

export default createAppContainer(AppNavigator);
