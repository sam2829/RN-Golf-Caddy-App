import { View, StyleSheet } from "react-native";
import PlayerName from "./PlayerName";

// component to render player names
function ScorecardPlayerNames({ playerNames, onNameChange }) {
  return (
    <View>
      <View style={styles.playerNameContainer}>
        <PlayerName
          title="Player 1"
          value={playerNames.player1}
          onChangeText={(text) => onNameChange("player1", text)}
        />
        <PlayerName
          title="Player 2"
          value={playerNames.player2}
          onChangeText={(text) => onNameChange("player2", text)}
        />
      </View>
      <View style={styles.playerNameContainer}>
        <PlayerName
          title="Player 3"
          value={playerNames.player3}
          onChangeText={(text) => onNameChange("player3", text)}
        />
        <PlayerName
          title="Player 4"
          value={playerNames.player4}
          onChangeText={(text) => onNameChange("player4", text)}
        />
      </View>
    </View>
  );
}

export default ScorecardPlayerNames;

// styles
const styles = StyleSheet.create({
  playerNameContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
