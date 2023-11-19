import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BudgetScreen from './src/screens/BudgetScreen';
import GroceryScreen from './src/screens/GroceryScreen';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="BudgetScreen" component={BudgetScreen} />
        <Tab.Screen name="GroceryScreen" component={GroceryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}