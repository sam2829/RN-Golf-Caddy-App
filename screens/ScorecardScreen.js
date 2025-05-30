import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";
import ScorecardHeaders from "../components/scorecard/ScorecardHeaders";
import ScorecardTableCells from "../components/scorecard/ScorecardTableCells";
import ScorecardTotal from "../components/scorecard/ScorecardTotal";
import PlayerName from "../components/scorecard/PlayerName";

// component to render scorecard screen
function ScorecardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.playerNameContainer}>
          <PlayerName title="Player 1" />
          <PlayerName title="Player 2" />
        </View>
        <View style={styles.playerNameContainer}>
          <PlayerName title="Player 3" />
          <PlayerName title="Player 4" />
        </View>
      </View>
      {/* header Row */}
      <View style={styles.scorecardContainer}>
        {/* import scorecard headers */}
        <ScorecardHeaders />
        {/* import scorecard table cells */}
        <ScorecardTableCells />
        {/* import total scores */}
        <ScorecardTotal />
      </View>
    </ScrollView>
  );
}

export default ScorecardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.lightGrey,
  },
  playerNameContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  scorecardContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.colors.primaryGold,
    elevation: 8,
    shadowColor: Colors.colors.lightGrey,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    marginHorizontal: 10,
    marginVertical: 30,
  },
});
