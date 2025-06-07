import { StyleSheet, View } from "react-native";
import GroupNumberText from "./GroupNumberText";

// component to render the numbers info
function GroupNumbers({
  numberOfPlayers,
  onPlayerNumberChange,
  numberOfGroups,
  onGroupNumberChange,
}) {
  return (
    <View style={styles.container}>
      {/* import title and input for numbers */}
      <GroupNumberText
        title="players"
        value={numberOfPlayers}
        onChangeNumber={(value) => onPlayerNumberChange(value)}
      />
      <GroupNumberText
        title="groups"
        value={numberOfGroups}
        onChangeNumber={(value) => onGroupNumberChange(value)}
      />
    </View>
  );
}

export default GroupNumbers;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 10
  },
});
