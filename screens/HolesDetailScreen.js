import { Image, StyleSheet, Text, View } from "react-native";
import { HOLES_DATA } from "../data/HolesData";
import { Colors } from "../constants/styles";
import Header from "../components/Header";

// function to render the hole details screen
function HolesDetailScreen({ route }) {
  // get route params for id
  const holeDetails = route.params?.holeId;

  //   find correct data by id
  const selectedHoleDetails = HOLES_DATA.find(
    (hole) => hole.id === holeDetails
  );

  return (
    <View style={styles.container}>
      {/* import Header */}
      <Header>Hole {selectedHoleDetails.holeNumber}</Header>
      {/* view for image */}
      <View style={styles.imageContainer}>
        <Image source={selectedHoleDetails.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{selectedHoleDetails.description}</Text>
      </View>
    </View>
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
