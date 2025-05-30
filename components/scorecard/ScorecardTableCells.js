import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { HOLES_DATA } from "../../data/HolesData";

// component to render scorecard tables cells
function ScorecardTableCells({ playerNames, scores, onScoreChange }) {
  return (
    <>
      {/* map over scorecard table cells */}
      {HOLES_DATA.map((item) => (
        <View
          key={item.id}
          style={[
            styles.rowContainer,
            item.holeNumber % 2 === 0 && styles.rowBackgroundGreen,
          ]}
        >
          <Text style={styles.scorecardCell}>{item.holeNumber}</Text>
          <Text style={styles.scorecardCell}>{item.par}</Text>
          <Text style={styles.scorecardCell}>{item.yards}</Text>
          {/* map over players and check names have been entered */}
          {["player1", "player2", "player3", "player4"].map((playerKey) => {
            const isPlayerSet = playerNames[playerKey]?.trim().length > 0;
            const scoreValue = scores[playerKey]?.[item.holeNumber] || "";

            // return input for updating scores
            return (
              <View
                key={playerKey}
                style={[styles.scorecardCell, styles.scorecardInputContainer]}
              >
                <TextInput
                  keyboardType="number-pad"
                  style={[
                    styles.scorecardInput,
                    !isPlayerSet && styles.disabledInput,
                  ]}
                  value={scoreValue}
                  onChangeText={(value) => {
                    // Only allow whole numbers
                    const cleanedValue = value.replace(/[^0-9]/g, "");
                    onScoreChange(playerKey, item.holeNumber, cleanedValue);
                  }}
                  editable={isPlayerSet}
                  maxLength={2}
                />
              </View>
            );
          })}
        </View>
      ))}
    </>
  );
}

export default ScorecardTableCells;

// styles
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  rowBackgroundGreen: {
    backgroundColor: Colors.colors.secondaryGreen,
  },
  scorecardCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  scorecardInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  scorecardInput: {
    padding: 0,
    margin: 0,
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
  disabledInput: {
    borderBottomWidth: 0,
  },
});
