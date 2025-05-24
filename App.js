import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import HolesScreen from "./screens/HolesScreen";
import ScorecardScreen from "./screens/ScorecardScreen";
import GroupScreen from "./screens/GroupsScreen";
import { Colors } from "./constants/styles";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.colors.primaryGreen },
            headerTintColor: Colors.colors.primaryGold,
            tabBarStyle: { backgroundColor: Colors.colors.primaryGreen },
            tabBarActiveTintColor: Colors.colors.primaryGold,
            tabBarInactiveTintColor: Colors.colors.white,
          }}
        >
          <BottomTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Home",
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="HolesScreen"
            component={HolesScreen}
            options={{
              title: "Holes",
              tabBarLabel: "Holes",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="golf" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="ScorecardScreen"
            component={ScorecardScreen}
            options={{
              title: "Scorecard",
              tabBarLabel: "Scorecard",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="clipboard" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="GroupScreen"
            component={GroupScreen}
            options={{
              title: "Groups",
              tabBarLabel: "Groups",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people" size={size} color={color} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
