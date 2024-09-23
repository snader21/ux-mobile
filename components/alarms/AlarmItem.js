import { View, Text, StyleSheet, Pressable } from "react-native";

import DaysOfWeek from "./DaysOfWeek";

import PencilIcon from "../../icons/PencilIcon";
import TrashBinIcon from "../../icons/TrashBinIcon";

import { Colors } from "../../constants/colors";

function AlarmItem({ alarm }) {
  const {
    hours,
    minutes,
    meridiem,
    days,
    hasPhrases,
    hasChallenges,
    hasMusic,
  } = alarm;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.fullTime}>
          <Text style={styles.time}>
            {formattedHours}:{formattedMinutes}
          </Text>
          <Text style={styles.meridiem}>{meridiem}</Text>
        </View>
        <View style={styles.icons}>
          <PencilIcon />
          <TrashBinIcon />
        </View>
      </View>
      <View style={styles.days}>
        <DaysOfWeek days={days} editable={false} />
      </View>
      <View style={styles.options}>
        <View
          style={[
            styles.option,
            hasPhrases ? styles.selectedOption : styles.unSelectedOption,
          ]}
        >
          <Text
            style={
              hasPhrases
                ? styles.selectedOptionText
                : styles.unSelectedOptionText
            }
          >
            FRASES
          </Text>
        </View>
        <View
          style={[
            styles.option,
            hasChallenges ? styles.selectedOption : styles.unSelectedOption,
          ]}
        >
          <Text
            style={
              hasChallenges
                ? styles.selectedOptionText
                : styles.unSelectedOptionText
            }
          >
            RETOS
          </Text>
        </View>
        <View
          style={[
            styles.option,
            hasMusic ? styles.selectedOption : styles.unSelectedOption,
          ]}
        >
          <Text
            style={
              hasMusic ? styles.selectedOptionText : styles.unSelectedOptionText
            }
          >
            MUSICA
          </Text>
        </View>
      </View>
    </View>
  );
}

export default AlarmItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryCyan,
    padding: 20,
    borderRadius: 24,
    gap: 16,

    shadowColor: "rgba(0, 0, 0, 0.36)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 13,

    elevation: 20,
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fullTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  time: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    color: Colors.primaryBlue,
  },
  meridiem: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    color: Colors.primaryBlue,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
    borderWidth: 2,
  },
  selectedOption: {
    backgroundColor: Colors.primaryBlue,
    borderColor: "transparent",
  },
  unSelectedOption: {
    backgroundColor: Colors.primaryWhite,
    borderColor: Colors.primaryBlue,
  },
  selectedOptionText: {
    color: Colors.primaryWhite,
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
  unSelectedOptionText: {
    color: Colors.primaryBlue,
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
});
