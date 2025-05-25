import { FlatList, StyleSheet } from "react-native";
import { HOLES_DATA } from "../data/HolesData";
import HoleItem from "../components/holesData/HoleItem";
import { Colors } from "../constants/styles";

// function to create each hole item
function RenderHolesData(itemData) {
  return <HoleItem {...itemData.item} />;
}

// function to render Holes screen and flatlist
function HolesScreen() {
  return (
    <FlatList
      data={HOLES_DATA}
      renderItem={RenderHolesData}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
}

export default HolesScreen;

// styles
const styles = StyleSheet.create({
  container: { backgroundColor: Colors.colors.lightGrey },
});
