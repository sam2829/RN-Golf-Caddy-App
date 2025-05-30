import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

// component to render custom button
function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

// styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.colors.primaryGreen,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.colors.primaryGold,
  },
  pressed: {
    opacity: 0.7,
  },
});
