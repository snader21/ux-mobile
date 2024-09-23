// Update in AlarmScreen.js
import { View, StyleSheet, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CustomButton from "../components/ui/CustomButton";

import { useAlarmsContext } from "../contexts/alarms-context";
import { Colors } from "../constants/colors";
import AlarmItem from "../components/alarms/AlarmItem";

function ListItemSeparator() {
  return <View style={{ height: 16, backgroundColor: "transparent" }} />;
}

function AlarmScreen({ navigation }) {
  const { alarms } = useAlarmsContext();
  return (
    <LinearGradient
      colors={[Colors.primaryBlack, Colors.primaryBlue]}
      style={styles.rootScreen}
    >
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Image source={require("../assets/logo.png")} style={styles.image} />
          <CustomButton
            onPress={() => navigation.navigate("CreateAlarmScreen")}
          >
            +
          </CustomButton>
        </View>
        <FlatList
          data={alarms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <AlarmItem alarm={item} />}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </LinearGradient>
  );
}

export default AlarmScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  image: {
    width: 38,
    height: 38,
  },
});
