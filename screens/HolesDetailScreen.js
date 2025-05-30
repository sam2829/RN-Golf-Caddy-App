import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HOLES_DATA } from "../data/HolesData";
import { Colors } from "../constants/styles";
import Header from "../components/UI/Header";

// function to render the hole details screen
function HolesDetailScreen({ route }) {
  // get route params for id
  const holeDetails = route.params?.holeId;

  //   find correct data by id
  const selectedHoleDetails = HOLES_DATA.find(
    (hole) => hole.id === holeDetails
  );

  return (
    <ScrollView style={styles.container}>
      {/* import Header */}
      <Header>Hole {selectedHoleDetails.holeNumber}</Header>
      <View style={styles.holeStatsContainer}>
        <Text style={styles.text}>Yards: {selectedHoleDetails.yards}</Text>
        <Text style={styles.text}>Par: {selectedHoleDetails.par}</Text>
      </View>
      {/* view for image */}
      <View style={styles.imageContainer}>
        <Image
          source={selectedHoleDetails.image}
          style={styles.image}
          accessibilityLabel={`Hole number ${selectedHoleDetails.holeNumber}`}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{selectedHoleDetails.description}</Text>
      </View>
    </ScrollView>
  );
}

export default HolesDetailScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.lightGrey,
  },
  imageContainer: {
    height: 200,
    width: 300,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
    borderColor: Colors.colors.primaryGold,
    borderWidth: 2,
    elevation: 8,
    shadowColor: Colors.colors.lightGrey,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
  },
  holeStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
