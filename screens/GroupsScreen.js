import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/styles";
import Header from "../components/UI/Header";
import GroupNumbers from "../components/groups/GroupNumbers";
import { useState } from "react";
import Button from "../components/UI/Button";

// component to render group screen
function GroupScreen() {
  // use state hook for number of players
  const [numberOfPlayers, setNumberOfPlayers] = useState();

  //   use state hook for number of Groups
  const [numberOfGroups, setNumberOfGroups] = useState();

  //   use state hook for player names
  const [playerNames, setPlayerNames] = useState({});

  //   function for handling number of players
  const handlePlayerNumbers = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    setNumberOfPlayers(value ? Number(cleanedValue) : 0);
  };

  //   function for handling number of groups
  const handleNumberOfGroups = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    setNumberOfGroups(value ? Number(cleanedValue) : 0);
  };

  //   function for handling player names
  const handleChangePlayerNames = (index, name) => {
    setPlayerNames((prev) => ({
      ...prev,
      [`player${index + 1}`]: name,
    }));
  };

  //   function to handle resetting all data
  const handleResetGroupdata = () => {
    setNumberOfPlayers("");
    setNumberOfGroups("");
    setPlayerNames({});
  };

  console.log(playerNames);

  return (
    <ScrollView style={styles.container}>
      {/* import header */}
      <Header>Decide Your Groups</Header>
      {/* import player numbers */}
      <GroupNumbers
        numberOfPlayers={numberOfPlayers}
        onPlayerNumberChange={handlePlayerNumbers}
        numberOfGroups={numberOfGroups}
        onGroupNumberChange={handleNumberOfGroups}
      />
      <View style={styles.playerNamesContainer}>
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
      {/* import and display reset and submit player buttons */}
      <View style={styles.buttonsContainer}>
        <Button onPress={handleResetGroupdata} style={styles.button}>
          Reset
        </Button>
        <Button style={styles.button}>Randomise</Button>
      </View>
    </ScrollView>
  );
}

export default GroupScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.lightGrey,
    paddingHorizontal: 10,
  },
  playerNamesContainer: {},
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
});
