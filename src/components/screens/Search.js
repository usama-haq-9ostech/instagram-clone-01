import {
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../screenComponents/Search/SearchBox";
import SearchContent from "../screenComponents/Search/SearchContent";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowsHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="pluscircleo"
            style={{
              fontSize: 40,
              opacity: 0.5,
            }}
          />
        </TouchableOpacity>
      </ScrollView>

      {image ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,0.8)",
          }}
        >
          <StatusBar
            backgroundColor="#525252"
            barStyle="dark-content"
          ></StatusBar>
          <View
            style={{
              position: "absolute",
              top: windowsHeight / 6,
              left: windowWidth / 18,
              backgroundColor: "white",
              width: 350,
              height: 465,
              borderRadius: 15,
              zIndex: 2,
              elevation: 50,
            }}
          >
            {/* ---------- Top User Info ---------- */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  paddingLeft: 8,
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "600" }}>
                  the_anonymous_guy
                </Text>
              </View>
            </View>
            {/* ---------- Center Image ---------- */}
            <View>
              <Image
                source={image}
                style={{
                  width: "100%",
                  height: 368,
                }}
              ></Image>
            </View>
            {/* ---------- Bottom Action Buttons ---------- */}
            <View
              style={{
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                flexDirection: "row",
                padding: 8,
              }}
            >
              <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
              <Ionic
                name="ios-person-circle-outline"
                style={{ fontSize: 26 }}
              />
              <Feather name="navigation" style={{ fontSize: 26 }} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
