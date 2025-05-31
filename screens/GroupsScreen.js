import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "../constants/styles";
import Header from "../components/UI/Header";
import GroupNumbers from "../components/groups/GroupNumbers";
import { useState } from "react";
import Button from "../components/UI/Button";
import EnterPlayerNames from "../components/groups/EnterPlayerNames";

// component to render group screen
function GroupScreen() {
  // use state hook for number of players
  const [numberOfPlayers, setNumberOfPlayers] = useState();

  //   use state hook for number of Groups
  const [numberOfGroups, setNumberOfGroups] = useState();

  //   use state hook for player names
  const [playerNames, setPlayerNames] = useState({});

  //   use state hook for confirmed players
  const [confirmedPlayers, setConfirmedPlayers] = useState({});

  //   function for handling number of players
  const handlePlayerNumbers = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    setNumberOfPlayers(value ? Number(cleanedValue) : 0);
  };

  //   function for handling number of groups
  const handleNumberOfGroups = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    if (cleanedValue > numberOfPlayers) {
      Alert.alert(
        "Select suitable number",
        "Select another number for number of groups which can be used."
      );
    } else {
      setNumberOfGroups(value ? Number(cleanedValue) : 0);
    }
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
    setConfirmedPlayers({});
  };

  //   function to handle confirmed players and randomise
  const handleConfirmedPlayers = () => {
    // make sure all names are filled out before submitting
    const allNamesValid =
      Object.keys(playerNames).length === numberOfPlayers &&
      Object.values(playerNames).every((name) => name.trim() !== "");

    if (!allNamesValid) {
      Alert.alert(
        "Missing Names",
        "Please make sure you fill in all players names."
      );
      return;
    }

    setConfirmedPlayers(playerNames);
  };

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
      {/* import inputs for player names */}
      <EnterPlayerNames
        numberOfPlayers={numberOfPlayers}
        numberOfGroups={numberOfGroups}
        playerNames={playerNames}
        handleChangePlayerNames={handleChangePlayerNames}
      />
      {/* import and display reset and submit player buttons */}
      <View style={styles.buttonsContainer}>
        <Button onPress={handleResetGroupdata} style={styles.button}>
          Reset
        </Button>
        <Button onPress={handleConfirmedPlayers} style={styles.button}>
          Randomise
        </Button>
      </View>
      {/* list out the player names entered */}
      <View>
        {Object.keys(confirmedPlayers).length > 0 &&
          Object.entries(confirmedPlayers).map(([key, name]) => (
            <Text key={key} style={styles.confirmedPlayer}>
              {name}
            </Text>
          ))}
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
});
