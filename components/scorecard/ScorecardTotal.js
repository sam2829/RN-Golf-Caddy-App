import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function ScorecardTotal() {
  return (
    <View style={[styles.rowContainer, styles.totalRowContainer]}>
      <Text style={styles.totalText}>Total Score:</Text>
      <Text style={styles.totalScores}>78</Text>
      <Text style={styles.totalScores}>69</Text>
      <Text style={styles.totalScores}>84</Text>
      <Text style={styles.totalScores}>72</Text>
    </View>
  );
}

export default ScorecardTotal;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  totalRowContainer: {
    borderTopWidth: 2,
    borderColor: Colors.colors.primaryGold,
  },
  totalText: {
    flex: 3,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalScores: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
