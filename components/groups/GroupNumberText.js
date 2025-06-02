import { StyleSheet, View, Text, TextInput } from "react-native";
import { Colors } from "../../constants/styles";

// component to render the group numbers text and inputs
function GroupNumberText({ title, value, onChangeNumber }) {
  return (
    <View style={styles.numbersInnerContainer}>
      <Text style={styles.subHeading}>Number of {title}:</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        maxLength={2}
        value={value}
        onChangeText={onChangeNumber}
      />
    </View>
  );
}

export default GroupNumberText;

// styles
const styles = StyleSheet.create({
  numbersInnerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    width: 40,
    borderBottomWidth: 2,
    borderRadius: 2,
    borderColor: Colors.colors.primaryGold,
    marginHorizontal: 5,
    padding: 10,
    textAlign: "center",
    color: Colors.colors.black,
  },
});
