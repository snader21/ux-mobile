import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import CheckIcon from "../../icons/CheckIcon";
import { Colors } from "../../constants/colors";

const CustomCheckbox = ({ initialValue = false, onCheckChange }) => {
  const [checked, setChecked] = useState(initialValue);

  const handlePress = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckChange(newChecked);
  };

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.container, checked ? styles.checked : {}, styles.pressed]
          : [styles.container, checked ? styles.checked : {}]
      }
      onPress={handlePress}
    >
      {checked && <CheckIcon color={Colors.primaryWhite} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryWhite,
    borderRadius: 3,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    padding: 8,
  },
  checked: {
    backgroundColor: Colors.primaryBlue,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default CustomCheckbox;
