import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView, StyleSheet } from "react-native";
import NotImplementedScreen from "./screens/NotImplementedScreen";

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import AlarmScreen from "./screens/AlarmScreen";
import CreateAlarmScreen from "./screens/CreateAlarmScreen";
import MusicSetupScreen from "./screens/MusicSetupScreen";
import MathChallengeSetupScreen from "./screens/MathChallengeSetupScreen";
import MemoryChallengeSetupScreen from "./screens/MemoryChallengeSetupScreen";

import CalculatorIcon from "./icons/CalculatorIcon";
import PuzzleIcon from "./icons/PuzzleIcon";
import QrIcon from "./icons/QrIcon";
import MessageIcon from "./icons/MessageIcon";
import MusicNoteIcon from "./icons/MusicNoteIcon";
import KeyIcon from "./icons/KeyIcon";
import AlarmIcon from "./icons/AlarmIcon";
import CogIcon from "./icons/CogIcon";
import BackIcon from "./icons/BackIcon";
import BurgerIcon from "./icons/BurgerIcon";

import { AlarmsContextProvider } from "./contexts/alarms-context";

import { Colors } from "./constants/colors";

const AlarmStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <BackIcon size={40} color={Colors.primaryWhite} />
    </Pressable>
  );
}

function OpenDrawerButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{ marginLeft: 16 }}
      onPress={() => navigation.openDrawer()}
    >
      <BurgerIcon size={24} color={Colors.primaryWhite} />
    </Pressable>
  );
}

function AlarmStackNavigation() {
  return (
    <AlarmStack.Navigator
      initialRouteName="AlarmList"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryBlue,
        },
        headerTintColor: Colors.primaryWhite,
        headerTitleStyle: {
          fontFamily: "Roboto_500Medium",
          fontSize: 24,
        },
        headerBackTitleVisible: false,
        headerLeft: () => <BackButton />,
      }}
    >
      <AlarmStack.Screen
        name="AlarmList"
        component={AlarmScreen}
        options={{ headerShown: false }}
      />
      <AlarmStack.Screen
        name="CreateAlarmScreen"
        component={CreateAlarmScreen}
        options={{ title: "Crear alarma" }}
      />
    </AlarmStack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Retos matemáticos"
      screenOptions={{
        headerLeft: () => <OpenDrawerButton />,
        headerStyle: {
          backgroundColor: Colors.primaryBlue,
        },
        headerTintColor: Colors.primaryWhite,
        headerTitleStyle: {
          fontFamily: "Roboto_500Medium",
          fontSize: 20,
        },
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
          drawerIcon: () => <CalculatorIcon color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Retos de memoria"
        component={MemoryChallengeSetupScreen}
        options={{
          drawerIcon: () => <PuzzleIcon color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Retos QR"
        component={NotImplementedScreen}
        options={{
          drawerIcon: () => <QrIcon color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Frases motivacionales"
        component={NotImplementedScreen}
        options={{
          drawerIcon: () => <MessageIcon color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Música"
        component={MusicSetupScreen}
        options={{
          drawerIcon: () => <MusicNoteIcon color={Colors.primaryBlue} />,
        }}
      />
      <Drawer.Screen
        name="Cambia tu contraseña"
        component={NotImplementedScreen}
        options={{
          drawerIcon: () => <KeyIcon color={Colors.primaryBlue} />,
        }}
      />
    </Drawer.Navigator>
  );
}

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
            <AlarmIcon
              size={focused ? 26 : 20}
              color={focused ? Colors.primaryBlue : Colors.primaryGray}
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
            <CogIcon
              size={focused ? 36 : 30}
              color={focused ? Colors.primaryBlue : Colors.primaryGray}
            />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

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
    <>
      <StatusBar style="light" />
      <AlarmsContextProvider>
        <SafeAreaView style={styles.rootScreen}>
          <NavigationContainer>
            <BottomTabNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </AlarmsContextProvider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
