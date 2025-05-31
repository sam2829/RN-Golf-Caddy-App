import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/styles";
import Header from "../components/UI/Header";
import GroupNumbers from "../components/groups/GroupNumbers";
import { useState } from "react";

// component to render group screen
function GroupScreen() {
  // use state hook for number of players
  const [numberOfPlayers, setNumberOfPlayers] = useState();

  //   use state hook for number of Groups
  const [numberOfGroups, setNumberOfGroups] = useState();

  //   function for handling number of players
  const handlePlayerNumbers = (value) => {
    const cleanedValue = value.replace(/[^1-9]/g, "");
    setNumberOfPlayers(value ? Number(cleanedValue) : 0);
  };

  //   function for handling number of groups
  const handleNumberOfGroups = (value) => {
    const cleanedValue = value.replace(/[^1-9]/g, "");
    setNumberOfGroups(value ? Number(cleanedValue) : 0);
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
      {numberOfPlayers > 0 &&
        numberOfGroups > 0 &&
        Array.from({ length: numberOfPlayers }, (_, i) => (
          <Text key={i}>Player {i + 1}</Text>
        ))}
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
});
