import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const daysLabels = ["L", "M", "X", "J", "V", "S", "D"];

const DaysOfWeek = ({ days, editable, onDayToggle }) => {
  return (
    <View style={styles.container}>
      {days?.map((active, index) => {
        const dayStyle = active ? styles.dayActive : styles.dayInactive;
        const textStyle = [
          styles.dayText,
          active ? styles.dayActiveText : styles.dayInactiveText,
        ];
        const DayComponent = editable ? TouchableOpacity : View;

        return (
          <DayComponent
            key={index}
            style={[styles.day, dayStyle]}
            onPress={() => editable && onDayToggle?.(index)}
          >
            <Text style={textStyle}>{daysLabels[index]}</Text>
          </DayComponent>
        );
      })}
    </View>
  );
};

export default DaysOfWeek;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.primaryWhite,
    borderRadius: 5,
    overflow: "hidden",
  },
  day: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  dayActive: {
    backgroundColor: Colors.primaryBlue,
  },
  dayInactive: {
    backgroundColor: Colors.primaryWhite,
  },
  dayText: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: Colors.primaryWhite,
    fontWeight: "bold",
  },
  dayActiveText: {
    color: Colors.primaryWhite,
  },
  dayInactiveText: {
    color: Colors.primaryBlue,
  },
});
