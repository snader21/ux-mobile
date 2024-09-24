import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

function CustomButton({
  children,
  buttonColor = Colors.primaryBlue,
  textColor = Colors.primaryWhite,
  rippleColor = Colors.primaryCyan,
  borderColor = "transparent",
  onPress,
  icon,
}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer(buttonColor, borderColor),
                styles.pressed,
              ]
            : styles.buttonInnerContainer(buttonColor, borderColor)
        }
        onPress={onPress}
        android_ripple={{ color: rippleColor }}
      >
        <Text style={styles.buttonText(textColor)}>{children}</Text>
        {icon && icon}
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: (color, border) => ({
    backgroundColor: color,
    paddingVertical: 8,
    paddingHorizontal: 18,
    elevation: 2,
    borderWidth: 2,
    borderColor: border,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  }),
  buttonText: (color) => ({
    fontFamily: "Roboto_700Bold",
    color: color,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  }),
  pressed: {
    opacity: 0.75,
  },
});
