import React, { useState } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { VideoData } from "../../../Data";
import SingleReel from "./SingleReel";

const ReelsComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={VideoData}
      vertical={true}
      onChangeIndex={handleIndexChange}
      renderItem={({ item, index }) => (
        <SingleReel
          key={index}
          item={item}
          index={index}
          currentIndex={currentIndex}
        />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelsComponents;
