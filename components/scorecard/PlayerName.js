import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/styles";

// component to render the player name texts
function PlayerName({ title, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{title}:</Text>
      <TextInput
        keyboardType="default"
        style={styles.input}
        placeholder="Enter name to keep score!"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default PlayerName;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.colors.primaryGold,
    fontSize: 12,
    padding: 10,
  },
});
