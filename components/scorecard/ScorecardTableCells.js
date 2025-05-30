import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { HOLES_DATA } from "../../data/HolesData";

function ScorecardTableCells() {
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
          {/* map over text inputs for players score */}
          {[0, 1, 2, 3].map((playerIndex) => (
            <View
              key={playerIndex}
              style={[styles.scorecardCell, styles.scorecardInputContainer]}
            >
              <TextInput
                keyboardType="number-pad"
                style={styles.scorecardInput}
              />
            </View>
          ))}
        </View>
      ))}
    </>
  );
}

export default ScorecardTableCells;

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
    width: "80%",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
});
