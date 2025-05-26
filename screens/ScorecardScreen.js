import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/styles";
import { HOLES_DATA } from "../data/HolesData";

// component to render scorecard screen
function ScorecardScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* header Row */}
      <View style={styles.scorecardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Hole</Text>
          <Text style={styles.header}>Par</Text>
          <Text style={styles.header}>Yards</Text>
          <Text style={styles.header}>P1</Text>
          <Text style={styles.header}>P2</Text>
          <Text style={styles.header}>P3</Text>
          <Text style={styles.header}>P4</Text>
        </View>

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
        {/* total scores */}
        <View style={[styles.rowContainer, styles.totalRowContainer]}>
          <Text style={styles.totalText}>Total Score:</Text>
          <Text style={styles.totalScores}>78</Text>
          <Text style={styles.totalScores}>69</Text>
          <Text style={styles.totalScores}>84</Text>
          <Text style={styles.totalScores}>72</Text>
        </View>
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
