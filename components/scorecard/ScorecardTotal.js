import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

// component to render total scores
function ScorecardTotal({ scores }) {
  return (
    <View style={[styles.rowContainer, styles.totalRowContainer]}>
      <Text style={styles.totalText}>Total Score:</Text>
      {/* map of players and total their scores */}
      {["player1", "player2", "player3", "player4"].map((playerKey) => {
        const playerScores = scores[playerKey] || {};

        // Add the total scores
        const holeCount = Object.keys(playerScores).length;
        const total =
          holeCount === 18
            ? Object.values(playerScores).reduce((sum, value) => {
                const num = parseInt(value, 10);
                return isNaN(num) ? sum : sum + num;
              }, 0)
            : "-";

        return (
          <Text key={playerKey} style={styles.totalScores}>
            {total > 0 ? total : "-"}
          </Text>
        );
      })}
    </View>
  );
}

export default ScorecardTotal;

// styles
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
