import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from './home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
};
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

const MoviesStack = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default MoviesStack;
