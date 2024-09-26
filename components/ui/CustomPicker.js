import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import { Colors } from "../../constants/colors";

const CustomPicker = ({
  items,
  value,
  onValueChange,
  placeholderLabel = "",
}) => {
  const placeholder = {
    label: placeholderLabel,
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
    outline: "none",
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
