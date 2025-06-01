import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Colors } from "../constants/styles";
import Header from "../components/UI/Header";
import GroupNumbers from "../components/groups/GroupNumbers";
import { useState } from "react";
import Button from "../components/UI/Button";
import EnterPlayerNames from "../components/groups/EnterPlayerNames";
import RandomiseAndGroupPlayers from "../components/groups/RandomiseAndGroupPlayers";
import GroupedPlayers from "../components/groups/GroupedPlayers";

// component to render group screen
function GroupScreen() {
  // use state hook for number of players
  const [numberOfPlayers, setNumberOfPlayers] = useState();

  //   use state hook for number of Groups
  const [numberOfGroups, setNumberOfGroups] = useState();

  //   use state hook for player names
  const [playerNames, setPlayerNames] = useState({});

  // use state for grouped players
  const [groupedPlayers, setGroupedPlayers] = useState([]);

  // state for if groups flipped
  const [flipTrigger, setFlipTrigger] = useState(0);

  //   function for handling number of players
  const handlePlayerNumbers = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    setNumberOfPlayers(value ? Number(cleanedValue) : 0);
  };

  //   function for handling number of groups
  const handleNumberOfGroups = (value) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    const groupNumberValid = handleGroupNumberValid(cleanedValue);

    if (!groupNumberValid) {
      return;
    } else {
      setNumberOfGroups(value ? Number(cleanedValue) : "");
    }
  };

  // function to check for number of groups validity
  const handleGroupNumberValid = (groupValue) => {
    if (
      (groupValue !== "" && groupValue > numberOfPlayers) ||
      (groupValue !== "" &&
        groupValue !== 0 &&
        numberOfPlayers / groupValue > 4)
    ) {
      Alert.alert(
        "Select suitable number",
        "Each group must have no more than 4 players and groups must not exceed total players."
      );
      return;
    } else {
      return groupValue;
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
    setGroupedPlayers([]);
    setFlipTrigger(0);
  };

  //   function to handle confirmed players and randomise
  const handleRandomisePlayers = () => {
    // make sure all names are filled out before submitting
    const allNamesValid =
      Object.keys(playerNames).length === numberOfPlayers &&
      Object.values(playerNames).every((name) => name.trim() !== "");

    // check group number valid
    const groupNumberValid = handleGroupNumberValid(numberOfGroups);

    if (!groupNumberValid) {
      return;
    }

    // check all player names are entered
    if (!allNamesValid) {
      Alert.alert(
        "Missing Names",
        "Please make sure you fill in all players names."
      );
      return;
    }
    // randomise groups function
    const groups = RandomiseAndGroupPlayers(
      Object.values(playerNames),
      numberOfGroups
    );
    setGroupedPlayers(groups);
    setFlipTrigger((prev) => prev + 1);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "blue" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Button onPress={handleRandomisePlayers} style={styles.button}>
              Randomise
            </Button>
          </View>
          {/* import and display lists of grouped players */}
          <GroupedPlayers
            groupedPlayers={groupedPlayers}
            triggerFlip={flipTrigger}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
