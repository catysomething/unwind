import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen'

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

