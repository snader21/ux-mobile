import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground } from "react-native";

import AlarmScreen from "./screens/AlarmScreen";
import CreateAlarmScreen from "./screens/CreateAlarmScreen";
import MusicSetupScreen from "./screens/MusicSetupScreen";
import MathChallengeSetupScreen from "./screens/MathChallengeSetupScreen";
import MemoryChallengeSetupScreen from "./screens/MemoryChallengeSetupScreen";
import { Colors } from "./constants/colors";
import Calculator from "./icons/Calculator";
import Puzzle from "./icons/Puzzle";

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import Qr from "./icons/Qr";
import Message from "./icons/Message";
import MusicNote from "./icons/MusicNote";
import Key from "./icons/Key";
import Alarm from "./icons/Alarm";
import Cog from "./icons/Cog";

// Create stack navigators
const AlarmStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

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

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Retos matemáticos"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryBlue,
        },
        headerTintColor: Colors.primaryWhite,
        drawerLabelStyle: {
          fontFamily: "Roboto_700Bold",
          marginLeft: -25,
        },
        drawerActiveTintColor: Colors.primaryBlue,
        drawerActiveBackgroundColor: Colors.primaryCyan,
        drawerItemStyle: {
          marginVertical: 0,
          paddingVertical: 0,
        },
      }}
    >
      <Drawer.Screen
        name="Retos matemáticos"
        component={MathChallengeSetupScreen}
        options={{
          drawerIcon: () => <Calculator color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Retos de memoria"
        component={MemoryChallengeSetupScreen}
        options={{
          drawerIcon: () => <Puzzle color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Retos QR"
        component={MemoryChallengeSetupScreen}
        options={{
          drawerIcon: () => <Qr color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Frases motivacionales"
        component={MemoryChallengeSetupScreen}
        options={{
          drawerIcon: () => <Message color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Música"
        component={MusicSetupScreen}
        options={{
          drawerIcon: () => <MusicNote color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Cambia tu contraseña"
        component={MusicSetupScreen}
        options={{
          drawerIcon: () => <Key color={Colors.primaryBlue} />,
        }}
      />
    </Drawer.Navigator>
  );
}

// Bottom tab navigation setup
function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryBlue,
        tabBarInactiveTintColor: Colors.primaryGray,
        tabBarStyle: {
          backgroundColor: Colors.primaryWhite,
        },
        tabBarLabelStyle: {
          fontFamily: "Roboto_500Medium",
          fontSize: 12,
        },
        headerTitleStyle: {
          fontFamily: "Roboto_500Medium",
        },
      }}
    >
      <BottomTab.Screen
        name="Alarmas"
        component={AlarmStackNavigation}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Alarm
              size={focused ? 26 : 20}
              color={focused ? Colors.primaryBlue : color}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Configuración"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Cog
              size={focused ? 36 : 30}
              color={focused ? Colors.primaryBlue : color}
            />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Main app component
function App() {
  const [loaded, error] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default App;
