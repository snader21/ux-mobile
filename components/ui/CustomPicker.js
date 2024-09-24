import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
// import Icon from "react-native-vector-icons/MaterialIcons"; // Ensure this is installed
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import { Colors } from "../../constants/colors";

const CustomPicker = ({ items, value, onValueChange }) => {
  const placeholder = {
    label: "Escoge tu reto",
    value: null,
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={items}
      value={value}
      onValueChange={onValueChange}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      textInputProps={{ underlineColorAndroid: Colors.primaryCyan }}
      Icon={() => <ChevronDownIcon />}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 6,
    color: Colors.primaryBlue,
    paddingRight: 30,
    backgroundColor: "white",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Colors.primaryBlue,
    borderRadius: 6,
    color: Colors.primaryBlue,
    paddingRight: 30,
    backgroundColor: Colors.primaryWhite,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: Colors.primaryCyan,
  },
  iconContainer: {
    top: 12,
    right: 10,
  },
});

export default CustomPicker;
