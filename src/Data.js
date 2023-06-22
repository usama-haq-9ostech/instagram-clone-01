import { Storage } from "../assets/storage/Storage";
export const StoryInfo = [
  {
    id: 1,
    name: "Your story",
    image: Storage.Images.userProfile,
  },
  {
    id: 0,
    name: "Sam David",
    image: Storage.Images.profile1,
  },
  {
    id: 0,
    name: "Tom Holland",
    image: Storage.Images.profile2,
  },
  {
    id: 0,
    name: "The Groot",
    image: Storage.Images.profile3,
  },
  {
    id: 0,
    name: "The Rock",
    image: Storage.Images.profile4,
  },
  {
    id: 0,
    name: "John Cena",
    image: Storage.Images.profile5,
  },
];

export const VideoData = [
  {
    video: Storage.Videos.video1,
    profilePic: Storage.Images.profile1,
    title: "Mr. Smith",
    description: "Feel the beauty of nature",
    likes: "254k",
    isLiked: false,
  },
  {
    video: Storage.Videos.video2,
    profilePic: Storage.Images.profile2,
    title: "Superman",
    description: "It's tea time",
    likes: "999k",
    isLiked: false,
  },
  {
    video: Storage.Videos.video3,
    profilePic: Storage.Images.profile3,
    title: "Ant Man",
    description: "Yes!",
    likes: "1k",
    isLiked: false,
  },
  {
    video: Storage.Videos.video4,
    profilePic: Storage.Images.profile4,
    title: "The Groot",
    description: "Cute",
    likes: "54k",
    isLiked: true,
  },
];

export const PostInfo = [
  {
    postTitle: "Mr. Smith",
    postPersonImage: Storage.Images.userProfile,
    postImage: Storage.Images.post1,
    likes: 786,
    isLiked: false,
  },
  {
    postTitle: "Chicken",
    postPersonImage: Storage.Images.profile1,
    postImage: Storage.Images.post2,
    likes: 12,
    isLiked: false,
  },
  {
    postTitle: "Warrior",
    postPersonImage: Storage.Images.profile1,
    postImage: Storage.Images.post3,
    likes: 23,
    isLiked: false,
  },
  {
    postTitle: "Buddy",
    postPersonImage: Storage.Images.profile1,
    postImage: Storage.Images.post4,
    likes: 96,
    isLiked: false,
  },
];

export const SearchData = [
  {
    id: 0,
    images: [
      Storage.Images.post1,
      Storage.Images.post2,
      Storage.Images.post3,
      Storage.Images.post4,
      Storage.Images.post5,
      Storage.Images.post6,
    ],
  },
  {
    id: 1,
    images: [
      Storage.Images.post7,
      Storage.Images.post8,
      Storage.Images.post9,
      Storage.Images.post10,
      Storage.Images.post11,
      Storage.Images.post12,
    ],
  },
  {
    id: 2,
    images: [
      Storage.Images.post13,
      Storage.Images.post14,
      Storage.Images.post15,
    ],
  },
];
