import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

