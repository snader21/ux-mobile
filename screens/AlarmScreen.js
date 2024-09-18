// Update in AlarmScreen.js
import React from "react";
import { Text, View, Button } from "react-native";

function AlarmScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Alarm Screen</Text>
      <Button
        title="Create Alarm"
        onPress={() => navigation.navigate("CreateAlarmScreen")}
      />
    </View>
  );
}

export default AlarmScreen;
