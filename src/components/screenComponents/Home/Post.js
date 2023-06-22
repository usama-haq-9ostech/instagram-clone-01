import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useCallback } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { PostInfo } from "../../../Data";

const Post = () => {
  return (
    <View>
      {PostInfo.map((data, index) => {
        const [liked, setLiked] = useState(data.isLiked);

        const handleIncrement = useCallback(() => {
          setLiked(!liked);
        });

        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              borderBottomWidth: 0.1,
            }}
          >
            {/* ---------- Top Section : User Info ---------- */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.postPersonImage}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                ></Image>
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather
                name="more-vertical"
                style={{
                  fontSize: 20,
                }}
              />
            </View>
            {/* ---------- Image Section ---------- */}
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{
                  width: "100%",
                  height: 400,
                }}
              />
            </View>
            {/* ---------- Bottom Section : Action Buttons ---------- */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={handleIncrement}>
                  <AntDesign
                    name={liked ? "heart" : "hearto"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: liked ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <Feather
                name="bookmark"
                style={{
                  fontSize: 20,
                }}
              />
            </View>

            {/* ---------- Bottom Section : Likes & Comments ---------- */}
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              <Text>
                Liked by {liked ? "you and " : ""}{" "}
                {liked ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 2,
                }}
              >
                Please like and Subscribe!
              </Text>
              {/* ---------- Bottom Section : Comments ---------- */}
              <Text
                style={{
                  opacity: 0.4,
                  paddingVertical: 2,
                }}
              >
                View all comments
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      borderColor: "orange",
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    style={{
                      opacity: 0.5,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="emoji-happy"
                    style={{
                      fontSize: 15,
                      color: "lightgreen",
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{
                      fontSize: 15,
                      color: "violet",
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{ fontSize: 15, color: "pink" }}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
