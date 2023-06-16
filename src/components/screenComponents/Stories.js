import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const Stories = () => {
  const storyInfo = [
    {
      id: 1,
      name: "Your story",
      image: require("../../storage/images//userProfile.png"),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity key={index}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id === 1 ? (
                <View>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 24,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
