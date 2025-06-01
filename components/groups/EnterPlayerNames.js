import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

// component to render inputs to enter players names
function EnterPlayerNames({
  numberOfPlayers,
  numberOfGroups,
  playerNames,
  handleChangePlayerNames,
}) {
  return (
    <View>
      {numberOfPlayers > 0 &&
        numberOfGroups > 0 &&
        Array.from({ length: numberOfPlayers }, (_, i) => (
          <View key={i} style={styles.playerBlock}>
            <Text style={styles.player}>Player {i + 1}:</Text>
            <TextInput
              keyboardType="default"
              style={styles.playerNameInput}
              placeholder={`Enter player name`}
              value={playerNames[`player${i + 1}`] || ""}
              onChangeText={(text) => handleChangePlayerNames(i, text)}
              maxLength={18}
            />
          </View>
        ))
          .reduce((rows, element, index) => {
            if (index % 2 === 0) {
              rows.push([element]);
            } else {
              rows[rows.length - 1].push(element);
            }
            return rows;
          }, [])
          .map((row, i) => (
            <View key={i} style={styles.row}>
              {row}
              {/* Filler to keep layout aligned */}
              {row.length === 1 && <View style={styles.playerBlock} />}
            </View>
          ))}
    </View>
  );
}

export default EnterPlayerNames;

// styles
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playerBlock: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  player: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  playerNameInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.colors.primaryGold,
    fontSize: 12,
    padding: 10,
  },
});
