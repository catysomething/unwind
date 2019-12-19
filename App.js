import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import StashScreen from './src/screens/StashScreen';
import ShoppingListScreen from './src/screens/ShoppingListScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Counter: CounterScreen,
    Stash: StashScreen,
    Projects: ProjectsScreen,
    ShoppingList: ShoppingListScreen
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

