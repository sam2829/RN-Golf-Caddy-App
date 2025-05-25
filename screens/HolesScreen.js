import { Button, StyleSheet, View } from "react-native";

function HolesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Hole Details"
          onPress={() => navigation.navigate("HoleDetailsScreen")}
        />
      </View>
    </View>
  );
}

export default HolesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 50,
  },
});
