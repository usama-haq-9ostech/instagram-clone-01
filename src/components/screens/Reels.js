import { View, Text, Dimensions } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import ReelsComponents from "../screenComponents/Reels/ReelsComponents";

const Reels = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Reels
        </Text>
        <Feather
          name="camera"
          style={{
            fontSize: 25,
            color: "white",
          }}
        />
      </View>
      <ReelsComponents />
    </View>
  );
};

export default Reels;
