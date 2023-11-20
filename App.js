import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BudgetScreen from './src/screens/BudgetScreen';
import GroceryScreen from './src/screens/GroceryScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

/*
icon reference
 https://icons.expo.fyi/Index 
*/

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Budget'
        activeColor='green'
        shifting={true}
        sceneAnimationEnabled={true}
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen
          name="Budget"
          component={BudgetScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="calculator" size={24} color="green" />
            )
          }}
          />
        <Tab.Screen
          name="Grocery"
          component={GroceryScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="shopping-cart" size={24} color="green" />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}