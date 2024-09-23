import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "../constants/colors";
import AlarmIcon from "../icons/AlarmIcon";
import CustomCheckbox from "../components/ui/CustomCheckBox";

function CreateAlarmScreen({ navigation }) {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [meridiem, setMeridiem] = useState("AM");
  const [isFrasesChecked, setIsFrasesChecked] = useState(false);

  const handleFrasesCheckChange = (isChecked) => {
    setIsFrasesChecked(isChecked);
  };

  const handleHourChange = (text) => {
    if (
      text === "" ||
      (text.length <= 2 && /^\d+$/.test(text) && parseInt(text, 10) <= 12)
    ) {
      setHour(text);
    }
  };

  const handleMinuteChange = (text) => {
    if (
      text === "" ||
      (text.length <= 2 && /^\d+$/.test(text) && parseInt(text, 10) < 60)
    ) {
      setMinute(text);
    }
  };

  const handleHourBlur = () => {
    if (hour === "") {
      setHour("00");
    } else if (hour.length === 1) {
      setHour(`0${hour}`);
    }
  };

  const handleMinuteBlur = () => {
    if (minute === "") {
      setMinute("00");
    } else if (minute.length === 1) {
      setMinute(`0${minute}`);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.primaryBlack, Colors.primaryBlue]}
      style={styles.rootScreen}
    >
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.optionContainer}>
          <View style={styles.basicInfoHeader}>
            <AlarmIcon color={Colors.primaryWhite} />
            <Text style={styles.basicInfoHeadertext}>Hora alarma</Text>
          </View>
          <View style={styles.timePicker}>
            <View style={styles.timeInputContainer}>
              <TextInput
                style={styles.timeInput}
                keyboardType="numeric"
                maxLength={2}
                value={hour}
                onChangeText={handleHourChange}
                onBlur={handleHourBlur}
                placeholder="00"
              />
              <Text style={styles.timeInputLabel}>Horas</Text>
            </View>
            <View>
              <Text style={styles.colon}>:</Text>
              <Text></Text>
            </View>
            <View style={styles.timeInputContainer}>
              <TextInput
                style={styles.timeInput}
                keyboardType="numeric"
                maxLength={2}
                value={minute}
                onChangeText={handleMinuteChange}
                onBlur={handleMinuteBlur}
                placeholder="00"
              />
              <Text style={styles.timeInputLabel}>Minutos</Text>
            </View>
            <View style={styles.meridiemContainer}>
              <Pressable
                style={({ pressed }) =>
                  pressed
                    ? [
                        styles.ampmButton,
                        meridiem === "AM" ? styles.ampmSelected : {},
                        styles.pressed,
                      ]
                    : [
                        styles.ampmButton,
                        meridiem === "AM" ? styles.ampmSelected : {},
                      ]
                }
                onPress={() => setMeridiem("AM")}
              >
                <Text
                  style={[
                    styles.ampmButtonText,
                    meridiem === "AM" ? styles.ampmSelectedText : {},
                  ]}
                >
                  AM
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) =>
                  pressed
                    ? [
                        styles.ampmButton,
                        meridiem === "PM" ? styles.ampmSelected : {},
                        styles.pressed,
                      ]
                    : [
                        styles.ampmButton,
                        meridiem === "PM" ? styles.ampmSelected : {},
                      ]
                }
                onPress={() => setMeridiem("PM")}
              >
                <Text
                  style={[
                    styles.ampmButtonText,
                    meridiem === "PM" ? styles.ampmSelectedText : {},
                  ]}
                >
                  PM
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.row}>
            <Text style={styles.basicInfoHeadertext}>Frases</Text>
            <CustomCheckbox
              initialValue={isFrasesChecked}
              onCheckChange={handleFrasesCheckChange}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default CreateAlarmScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  mainContainer: {
    padding: 16,
    gap: 16,

    shadowColor: "rgba(0, 0, 0, 0.36)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 13,

    elevation: 20,
  },
  optionContainer: {
    backgroundColor: Colors.primaryCyan,
    padding: 20,
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  basicInfoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  basicInfoHeadertext: {
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
    color: Colors.primaryBlue,
    marginLeft: 8,
  },
  timePicker: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    gap: 8,
  },
  timeInputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  timeInput: {
    backgroundColor: Colors.primaryWhite,
    padding: 10,
    borderRadius: 24,
    width: 80,
    textAlign: "center",
    height: 80,
    fontSize: 48,
    color: Colors.primaryBlue,
    fontFamily: "Roboto_500Medium",

    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,

    elevation: 20,
  },
  timeInputLabel: {
    color: Colors.primaryBlue,
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
  },
  colon: {
    fontSize: 48,
    color: Colors.primaryBlue,
    fontFamily: "Roboto_500Regular",
  },
  meridiemContainer: {
    borderWidth: 2,
    borderColor: Colors.primaryBlue,
    borderRadius: 24,
    borderRadius: 12,
    overflow: "hidden",
    marginLeft: 8,
  },
  ampmButton: {
    backgroundColor: Colors.primaryWhite,
    padding: 6,
    width: 55,
    height: 47,
    alignItems: "center",
    justifyContent: "center",
  },
  ampmSelected: {
    backgroundColor: Colors.primaryBlue,
  },
  ampmButtonText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    color: Colors.primaryBlue,
  },
  ampmSelectedText: {
    color: Colors.primaryWhite,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  optionText: {
    color: Colors.primaryWhite,
    fontSize: 16,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dayButton: {
    backgroundColor: Colors.primaryWhite,
    padding: 6,
    borderRadius: 6,
  },
  dayButtonText: {
    color: Colors.primaryBlue,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
