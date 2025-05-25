import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/styles";
import FlagLogo from "../components/FlagLogo";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header>Welcome to the Abergavenny Golf Caddy!</Header>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This app is designed to help you enjoy your golf even more — giving
          you friendly advice for tackling each hole, keeping score easily, and
          helping organise your group.
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Good luck out there and enjoy the course!
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <FlagLogo />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.lightGrey,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  logoContainer: {
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
