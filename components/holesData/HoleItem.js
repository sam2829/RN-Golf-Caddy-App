import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import FlagLogo from "../UI/FlagLogo";
import { useNavigation } from "@react-navigation/native";

// function to load the hole item for each hole on holes screen
function HoleItem({ id, holeNumber, par, yards }) {
  // use naviagiton hook to navigate user
  const navigation = useNavigation();

  function holeDetailsPresshandler() {
    navigation.navigate("HoleDetailsScreen", {
      holeId: id,
    });
  }

  return (
    <Pressable
      onPress={holeDetailsPresshandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.holeItem}>
        {/* import flag logo */}
        <FlagLogo />
        <Text style={styles.holeItemText}>Hole {holeNumber}.</Text>
        <Text style={styles.holeItemText}>{yards} yards</Text>
        <Text style={styles.holeItemText}>Par {par}</Text>
      </View>
    </Pressable>
  );
}

export default HoleItem;

// styles
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.65,
  },
  holeItem: {
    padding: 20,
    marginVertical: 12,
    marginHorizontal: 10,
    backgroundColor: Colors.colors.secondaryGreen,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    elevation: 3,
    shadowColor: Colors.colors.lightGrey,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    flexWrap: "wrap",
  },
  holeItemText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
