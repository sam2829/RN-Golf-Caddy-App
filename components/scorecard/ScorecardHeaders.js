import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

// function to render score card
function ScorecardHeaders() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Hole</Text>
      <Text style={styles.header}>Par</Text>
      <Text style={styles.header}>Yards</Text>
      <Text style={styles.header}>P1</Text>
      <Text style={styles.header}>P2</Text>
      <Text style={styles.header}>P3</Text>
      <Text style={styles.header}>P4</Text>
    </View>
  );
}

export default ScorecardHeaders;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.colors.secondaryGreen,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
