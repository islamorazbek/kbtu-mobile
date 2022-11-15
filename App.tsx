import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

// screen components
import AuthScreen from './screens/Auth';
import HomeScreen from './screens/Home';

// redux store
import { store } from './store/store';
import { RootStackParamList } from './types/routing';

// navigation stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent('Online Bookstore', () => App);

