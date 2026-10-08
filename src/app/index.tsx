import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints(points + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileEmoji}>👨🏻‍💼</Text>
          </View>

          {/* Green Tick */}
          <View style={styles.tickContainer}>
            <Ionicons name="checkmark" size={34} color="#00e600" />
          </View>
        </View>

        {/* Line */}
        <View style={styles.line} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Ravihara</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <View style={styles.row}>
          <Ionicons name="mail" size={20} color="#000" />
          <Text style={styles.valueEmail}>sadeepravihara00@gmail.com</Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>

        <View style={styles.row}>
          <Ionicons name="star" size={20} color="#000" />
          <Text style={styles.points}>{points}</Text>
        </View>
      </View>

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={addPoint}
        activeOpacity={0.7}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  header: {
    height: 65,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 145,
  },

  profileCircle: {
    width: 135,
    height: 135,
    borderRadius: 70,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dce7ed",
    justifyContent: "center",
    alignItems: "center",
  },

  profileEmoji: {
    fontSize: 70,
  },

  tickContainer: {
    position: "absolute",
    right: 82,
    bottom: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  line: {
    height: 2,
    backgroundColor: "#222",
    marginTop: 10,
    marginBottom: 17,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginTop: 0,
    marginBottom: 6,
  },

  value: {
    fontSize: 18,
    color: "#333",
    marginBottom: 22,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  valueEmail: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },

  points: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },

  plusButton: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
