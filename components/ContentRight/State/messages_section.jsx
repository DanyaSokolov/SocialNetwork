import GirlLara from "../girlLara.jpg";
import BoyMax from "../boyMax.jpg";
import User from "../user_logo_two.png";
import Cat from "../cat.jpg";
import Enot from "../enot.jpg";
import Sky from "../sky.jpg";
import EmptyImg from "../placeholder.png";
import Kinder from "../kinder.jpg";
import NewYork from "../NewYork.jpg";
import Sea from "../sea.jpg";

export const ADD_MESSAGE = (content, User) => ({type: "ADD-MESSAGE", logo: User, message: content})

export const TEXT_MESSAGE = (newPost) => ({type: "TEXT-MESSAGE", text: newPost})

let startSection = {
  PageMessages: {
      messages: [
          {logo: GirlLara, message: "Hello!"},
          {logo: User, message: "Hello, nothing special, I am fine, and you? ;)"},
          {logo: GirlLara, message: "Nothing too, but one interesting thing, I bought a new jacket."},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: GirlLara, message: "That would be nice, I will try to come but I have deals so I might be a little late."},
          {logo: User, message: "Good!"},
          {logo: User, message: "Good!"},
          {logo: User, message: "Good!"},
          {logo: User, message: "Good!"},
          {logo: User, message: "Good!"},
          {logo: GirlLara, message: "Hello!"},
          {logo: GirlLara, message: "Hello!"},
          {logo: GirlLara, message: "Hello!"},
          {logo: GirlLara, message: "Hello!"},
          {logo: GirlLara, message: "That would be nice, I will try to come but I have deals so I might be a little late."},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: User, message: "I have a party tomorow, are you coming?"},
          {logo: GirlLara, message: "Hello!"},
          {logo: GirlLara, message: "Hello!"},
          {logo: GirlLara, message: "Hello!"},
      ],
      speakers: [
          {user: GirlLara, name: "Lara Grom"},
          {user: BoyMax, name: "Max Worker"},
          {user: Cat, name: "Black Cat"},
          {user: Enot, name: "Little Raccoon"},
      ],
      InputArea: "",
  },
  PageFriends: {
      friends: [
          {user: GirlLara, name: "Lara Grom"},
          {user: BoyMax, name: "Max Worker"},
          {user: Cat, name: "Black Cat"},
          {user: Enot, name: "Little Raccoon"},
      ],
  },
  PageHome: {
      homePosts: [
          {user: BoyMax, name: "Max Worker", logo: NewYork, text: "New York is beautiful!"},
          {user: Cat, name: "Black Cat", logo: Sea, text: "Not only in the dreams."},
          {user: GirlLara, name: "Lara Grom", logo: Kinder, text: "I recently bought a Kinder Surprise New Year 2022 chocolate egg. More precisely, two at once. One for my nephew, the other for my daughter. We came across such a ... wolf cub, or something ...There was also a string and a clothespin going to him."},
          {user: User, name: "Danya Sokolov", logo: EmptyImg, text: "This is my first publication, so there won't be much text here.I learned how to work with props, and I'm very happy about it!"},
          {user: Enot, name: "Little Raccoon", logo: Sky, text: "Got out of the house to photograph such a beautiful sunset."},
      ],
  },
  PageProfile: {
      myPosts: [
          {user: User, name: "Danya Sokolov", logo: EmptyImg, text: "This is my first publication, so there won't be much text here.I learned how to work with props, and I'm very happy about it!"},
      ],
  },
}

let messagesSection = (state = startSection, action) => {
    if(action.type === "ADD-MESSAGE") {
        let newMessage = {
            logo: action.logo,
            message: action.message
        }
        state.PageMessages.messages.unshift(newMessage);
        state.PageMessages.InputArea = "";
      }
      else if(action.type === "TEXT-MESSAGE") {
        state.PageMessages.InputArea = action.text;
      }
      return state;
    }

export default messagesSection;

