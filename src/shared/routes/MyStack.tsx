import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home/Home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
};
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default MyStack;
