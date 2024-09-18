import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AlarmScreen from "./screens/AlarmScreen";
import CreateAlarmScreen from "./screens/CreateAlarmScreen";
import MusicSetupScreen from "./screens/MusicSetupScreen";
import MathChallengeSetupScreen from "./screens/MathChallengeSetupScreen";
import MemoryChallengeSetupScreen from "./screens/MemoryChallengeSetupScreen";

// Create stack navigators
const AlarmStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

// Stack navigation for alarms
function AlarmStackNavigation() {
  return (
    <AlarmStack.Navigator initialRouteName="AlarmList">
      <AlarmStack.Screen
        name="AlarmList"
        component={AlarmScreen}
        options={{ headerShown: false }}
      />
      <AlarmStack.Screen
        name="CreateAlarmScreen"
        component={CreateAlarmScreen}
        options={{ title: "Create Alarm" }}
      />
    </AlarmStack.Navigator>
  );
}

// Drawer navigation setup
function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Configuración de música">
      <Drawer.Screen
        name="Configuración de música"
        component={MusicSetupScreen}
      />
      <Drawer.Screen
        name="Configuración de desafío matemático"
        component={MathChallengeSetupScreen}
      />
      <Drawer.Screen
        name="Configuración de desafío de memoria"
        component={MemoryChallengeSetupScreen}
      />
    </Drawer.Navigator>
  );
}

// Bottom tab navigation setup
function BottomTabNavigation() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Alarmas"
        component={AlarmStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Main app component
function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default App;
