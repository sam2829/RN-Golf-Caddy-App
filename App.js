import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import HolesScreen from "./screens/HolesScreen";
import ScorecardScreen from "./screens/ScorecardScreen";
import GroupScreen from "./screens/GroupsScreen";
import { Colors } from "./constants/styles";
import HolesDetailScreen from "./screens/HolesDetailScreen";
import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState } from "react";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function to display holes screens and details screen in stack
function HolesOverview() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.colors.primaryGreen },
        headerTintColor: Colors.colors.primaryGold,
      }}
    >
      <Stack.Screen
        name="HolesScreen"
        component={HolesScreen}
        options={{
          headerTitle: () => (
            <Text
              style={{
                color: Colors.colors.primaryGold,
                fontSize: 20,
                fontWeight: "500",
                paddingVertical: 18.5,
              }}
            >
              Holes
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="HoleDetailsScreen"
        component={HolesDetailScreen}
        options={{
          title: " Hole Details",
        }}
      />
    </Stack.Navigator>
  );
}

// main app and bottom tabs setup
export default function App() {
  // state for icons loaded
  const [iconsLoaded, setIconsLoaded] = useState(false);

  // useEffect to check icons loaded on start up
  useEffect(() => {
    let fallbackTimeout = setTimeout(() => {
      setIconsLoaded(true);
    }, 2000);

    const loadIcons = async () => {
      try {
        Ionicons.loadFont().then(() => {
          setIconsLoaded(true);
        });
      } catch (error) {
        setIconsLoaded(true);
      }
    };

    loadIcons();

    return () => clearTimeout(fallbackTimeout);
  }, []);

  // app whilst loading
  if (!iconsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.colors.primaryGreen,
        }}
      >
        <ActivityIndicator size="large" color={Colors.colors.primaryGold} />
      </View>
    );
  }

  return (
    <>
      {iconsLoaded && (
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
                contentStyle: { backgroundColor: Colors.colors.primaryGold },
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
                name="HolesOverview"
                component={HolesOverview}
                options={{
                  title: "Holes",
                  headerShown: false,
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
      )}
    </>
  );
}
