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
import ScorecardHeaders from "../components/scorecard/ScorecardHeaders";
import ScorecardTableCells from "../components/scorecard/ScorecardTableCells";
import ScorecardTotal from "../components/scorecard/ScorecardTotal";
import ScorecardPlayerNames from "../components/scorecard/ScorecardPlayerNames";
import { useState } from "react";
import Button from "../components/UI/Button";

// component to render scorecard screen
function ScorecardScreen() {
  // use state for player names
  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });

  // state to keep track of scores
  const [scores, setScores] = useState({
    player1: {},
    player2: {},
    player3: {},
    player4: {},
  });

  // function to handle name changes
  const handleNameChange = (playerKey, newName) => {
    setPlayerNames((prev) => ({
      ...prev,
      [playerKey]: newName,
    }));
  };

  // function to update scores
  const handleScoreChange = (playerKey, holeNumber, value) => {
    setScores((prev) => ({
      ...prev,
      [playerKey]: {
        ...prev[playerKey],
        [holeNumber]: value,
      },
    }));
  };

  // function to handle confirm reset
  const handleConfirmReset = () => {
    Alert.alert(
      "Reset Scorecard",
      "Are you sure we want to clear all scores and player names?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: handleReset },
      ]
    );
  };

  // function to handle reset
  const handleReset = () => {
    setPlayerNames({});
    setScores({});
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "blue" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          {/* import player names */}
          <ScorecardPlayerNames
            playerNames={playerNames}
            onNameChange={handleNameChange}
          />
          {/* header Row */}
          <View style={styles.scorecardContainer}>
            {/* import scorecard headers */}
            <ScorecardHeaders />
            {/* import scorecard table cells */}
            <ScorecardTableCells
              playerNames={playerNames}
              scores={scores}
              onScoreChange={handleScoreChange}
            />
            {/* import total scores */}
            <ScorecardTotal playerNames={playerNames} scores={scores} />
          </View>
          {/* button container */}
          <View style={styles.buttonContainer}>
            {/* import button for reset */}
            <Button onPress={handleConfirmReset}>Reset Scorecard</Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default ScorecardScreen;

// styles
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
});
