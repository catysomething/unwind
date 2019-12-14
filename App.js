import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

