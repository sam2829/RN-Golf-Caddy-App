import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";

function Header({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>{children}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 40,
  },
  Heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.colors.black,
    textAlign: "center",
  },
});
