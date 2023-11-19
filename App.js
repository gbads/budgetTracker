import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Budgeting from './src/screens/Budgeting';
import GroceryList from './src/screens/GroceryList';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Budgeting" component={Budgeting} />
        <Tab.Screen name="GroceryList" component={GroceryList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}