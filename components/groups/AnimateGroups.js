import { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

// component to handle flipp animation for group display
function AnimatedGroups({ group, index, groupNumber, triggerFlip }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 3000, // 3 seconds
      delay: index * 1500,
      useNativeDriver: true,
    }).start();
  }, [triggerFlip]);

  const rotateY = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "0deg"], // Flip from back to front
  });

  return (
    <Animated.View
      style={[
        styles.groupContainer,
        {
          transform: [{ perspective: 1000 }, { rotateY }],
        },
      ]}
    >
      <Text style={styles.groupTitle}>Group {groupNumber}</Text>
      {group.map((name, j) => (
        <Text key={j} style={styles.groupPlayers}>
          {name}
        </Text>
      ))}
    </Animated.View>
  );
}

export default AnimatedGroups;

// styles
const styles = StyleSheet.create({
  groupContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.colors.primaryGold,
    padding: 10,
    backgroundColor: Colors.colors.secondaryGreen,
    backfaceVisibility: "hidden",
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottomWidth: 1,
    color: Colors.colors.primaryGold,
    borderColor: Colors.colors.primaryGreen,
  },
  groupPlayers: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
  },
});
