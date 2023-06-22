import { View, Image, TouchableOpacity, Touchable } from "react-native";
import React from "react";
import SearchData from "../../../Data";

const SearchContent = (props) => {
  return (
    <View>
      {SearchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      key={imageIndex}
                      style={{
                        paddingBottom: 2,
                      }}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                    >
                      <Image
                        source={imageData}
                        style={{
                          width: 126,
                          height: 150,
                        }}
                      ></Image>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 255,
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        style={{
                          paddingBottom: 2,
                        }}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                      >
                        <Image
                          source={imageData}
                          style={{
                            width: 126,
                            height: 150,
                          }}
                        ></Image>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <TouchableOpacity
                  style={{ marginLeft: 2 }}
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                >
                  <Image
                    source={data.images[5]}
                    style={{
                      width: 129,
                      height: 302,
                    }}
                  ></Image>
                </TouchableOpacity>
              </View>
            ) : null}

            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{ paddingLeft: 2 }}
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: 254, height: 300 }}
                  ></Image>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        style={{
                          paddingBottom: 2,
                        }}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                      >
                        <Image
                          source={imageData}
                          style={{
                            width: 126,
                            height: 149,
                          }}
                        ></Image>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;
