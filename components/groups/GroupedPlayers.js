import { View, Text, StyleSheet } from "react-native";
import AnimatedGroups from "./AnimateGroups";

// component to render the groups of players
function GroupedPlayers({ groupedPlayers, triggerFlip }) {
  return (
    <View style={styles.groupsWrapper}>
      {Object.keys(groupedPlayers).length > 0 &&
        groupedPlayers
          .reduce((rows, group, index) => {
            if (index % 2 === 0) {
              rows.push([group]);
            } else {
              rows[rows.length - 1].push(group);
            }
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <View key={rowIndex} style={styles.groupRow}>
              {row.map((group, i) => (
                <AnimatedGroups
                  key={i}
                  group={group}
                  index={rowIndex * 2 + i}
                  groupNumber={rowIndex * 2 + i + 1}
                  triggerFlip={triggerFlip}
                />
              ))}
              {/* Filler view if there's only 1 group in the last row */}
              {row.length === 1 && (
                <View style={styles.groupContainerFillSpace} />
              )}
            </View>
          ))}
    </View>
  );
}

export default GroupedPlayers;

// styles
const styles = StyleSheet.create({
  groupsWrapper: {
    marginTop: 10,
  },
  groupRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  groupContainerFillSpace: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 10,
  },
});
