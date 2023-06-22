import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const refVideo = useRef(null);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(item.isLiked);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{ height: "100%", height: "100%", position: "absolute" }}
        onPress={() => setMuted(!muted)}
        activeOpacity={0.9}
      >
        <VideoPlayer
          videoProps={{
            shouldPlay: currentIndex !== index ? false : true,
            resizeMode: ResizeMode.COVER,
            source: item.video,
            ref: refVideo,
          }}
          slider={{
            visible: false,
          }}
          fullscreen={{
            visible: false,
          }}
          timeVisible={false}
          mute={muted}
          paused
        />
      </TouchableOpacity>

      <Ionic
        name="volume-mute"
        style={{
          fontSize: muted ? 20 : 0,
          color: "white",
          position: "absolute",
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: "rgba(52,52,52,0.9)",
          borderRadius: 100,
          padding: muted ? 20 : 0,
        }}
      />
      {/* ------------------ Bottom Left Section ------------------ */}
      <View>
        <View
          style={{
            position: "absolute",
            width: windowWidth,
            zIndex: 1,
            bottom: 80,
            padding: 10,
          }}
        >
          <TouchableOpacity style={{ width: 150 }}>
            <View
              style={{
                width: 100,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: "white",
                  margin: 10,
                }}
              >
                <Image
                  source={item.profilePic}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              marginHorizontal: 10,
            }}
          >
            {item.description}
          </Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Ionic
              name="ios-musical-note"
              style={{ color: "white", fontSize: 16 }}
            />
            <Text style={{ color: "white" }}>Original Audio</Text>
          </View>
        </View>
      </View>
      {/* ------------------ Bottom Right Section ------------------ */}
      <View
        style={{
          position: "absolute",
          bottom: 100,
          right: 0,
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{ padding: 10 }}
        >
          <AntDesign
            name={liked ? "heart" : "heart-0"}
            style={{
              color: liked ? "red" : "white",
              fontSize: 25,
            }}
          />
          <Text style={{ color: "white" }}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{
              color: "white",
              fontSize: 25,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="paper-plane-outline"
            style={{
              color: "white",
              fontSize: 25,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{
              color: "white",
              fontSize: 25,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 0,
            borderWidth: 2,
            borderColor: "white",
            margin: 10,
          }}
        >
          <Image
            source={item.profilePic}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
