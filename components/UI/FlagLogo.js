import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import { StyleSheet, View } from "react-native";

// function to create custom logo
function FlagLogo() {
  return (
    <View style={styles.container}>
      <Ionicons name="golf" size={24} color={Colors.colors.primaryGold} />
    </View>
  );
}

export default FlagLogo;

// styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: Colors.colors.primaryGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
