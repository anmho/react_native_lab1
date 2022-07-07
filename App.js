import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          zIndex: 9999,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          height: "90%",
          borderRadius: 10,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 10,
        }}
      >
        <View style={{ height: "50%" }}>
          <View
            style={{
              backgroundColor: "black",
              width: "50%",
              aspectRatio: 1,
              borderRadius: 10000,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                flex: 1,
                transform: [{ scale: 1.1 }],
                height: "100%",
                resizeMode: "contain",
                width: "100%",
              }}
              source={require("./assets/myface.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.nameAndPronouns}>Andy Ho</Text>
          <Text style={{ fontSize: 20 }}>He/Him</Text>
        </View>
      </View>
    </View>
  );
}
{
  /* 

box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 30,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    resizeMode: "contain",
    width: "90%",
    padding: 50,
    borderRadius: 60,
  },
  nameAndPronouns: {
    fontSize: 50,
  },
  blurb: {
    fontSize: 20,
  },
  button: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "green",
  },
  buttonText: { fontSize: 20, color: "#fff" },
});
