import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

const CustomAlert = ({ onClose }) => {
  return (
    <View style={styles.warningContainer}>
      <FontAwesome name="exclamation-triangle" size={18} color={Colors.primaryWhite} style={styles.icon} />
      <Text style={styles.warningText}>** Tiempos establecidos por el sistema</Text>
      <TouchableOpacity onPress={onClose}>
        <FontAwesome name="times" size={18} color={Colors.primaryWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: "row",
    backgroundColor: Colors.errorPink,
    padding: 12,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  },
  icon: {
    marginRight: 8,
  },
  warningText: {
    color: Colors.primaryWhite,
    flex: 1,
    fontSize: 14,
  },
});

export default CustomAlert;