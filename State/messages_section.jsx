import GirlLara from "../girlLara.jpg";
import BoyMax from "../boyMax.jpg";
import User from "../user_logo_two.png";
import Cat from "../cat.jpg";
import Enot from "../enot.jpg";
import Spider from "../SpiderMan.png"

export const ADD_MESSAGE = (content, User) => ({type: "ADD-MESSAGE", logo: User, message: content})

export const TEXT_MESSAGE = (newPost) => ({type: "TEXT-MESSAGE", text: newPost})

let startSection = {
  PageMessages: {
      messages: [
          { id: 0, logo: GirlLara, message: "Hello!"},
          { isMe: true, id: 1, logo: User, message: "Hello, nothing special, I am fine, and you? ;)"},
          { id: 2, logo: GirlLara, message: "That would be nice, I will try to come but I have deals so I might be a little late."},
          { id: 3, logo: GirlLara, message: "Nothing too, but one interesting thing, I bought a new jacket."},
          { isMe: true, id: 4, logo: User, message: "I have a party tomorow, are you coming?"},
          { isMe: true, id: 5, logo: User, message: "Good!"},
          { id: 6, logo: GirlLara, message: "Hello!"},
          { id: 7, logo: GirlLara, message: "That would be nice!"},
          { isMe: true, id: 8, logo: User, message: "I have a party tomorow, are you coming?"},
          { id: 9, logo: GirlLara, message: "Hello!"},
          { id: 10, logo: GirlLara, message: "Nothing too, but one interesting thing, I bought a new jacket."},
          { isMe: true, id: 11, logo: User, message: "Good!"},
      ],
      speakers: [
          { id: 0, user: GirlLara, name: "lara grom"},
          { id: 1, user: BoyMax, name: "maXworker"},
          { id: 2, user: Cat, name: "black-cat"},
          { id: 4, user: Enot, name: "raccoon123"},
          { id: 5, user: Spider, name: "Spider-Man"},
      ],
      InputArea: [""],
  }
}

let messagesSection = (state = startSection, action) => {
    if(action.type === "ADD-MESSAGE") {
        let newMessage = {
            logo: action.logo,
            message: action.message,
            isMe: true
        }
        let stateCopy = {...state}
        stateCopy.PageMessages = {...stateCopy.PageMessages}
        stateCopy.PageMessages.messages = [...stateCopy.PageMessages.messages]
        stateCopy.PageMessages.messages.unshift(newMessage);
        stateCopy.PageMessages.InputArea = "";
        return stateCopy;
      }
      else if(action.type === "TEXT-MESSAGE") {
        let stateCopy2 = {...state}
        stateCopy2.PageMessages = {...stateCopy2.PageMessages}
        stateCopy2.PageMessages.InputArea = [...stateCopy2.PageMessages.InputArea]
        stateCopy2.PageMessages.InputArea = action.text
        return stateCopy2;
      }
      return state;
    }

export default messagesSection;

