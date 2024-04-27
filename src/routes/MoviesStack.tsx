import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home} from './screens';

export type RootStackParamList = {
  Home: undefined;
};
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

const MoviesStack = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default MoviesStack;
