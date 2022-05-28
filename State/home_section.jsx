import GirlLara from "../girlLara.jpg";
import BoyMax from "../boyMax.jpg";
import User from "../user_logo_two.png";
import Cat from "../cat.jpg";
import Enot from "../enot.jpg";
import Sky from "../sky.jpg";
import EmptyImg from "../placeholder.png";
import Kinder from "../kinder.jpg";
import NewYork from "../NewYork.jpg";
import Sea from "../lol.gif";
import Spider from "../SpiderMan.png";
import Bridge from "../bridge.jpg"
export const toLike = (postId) => ({type: "to-like", postId})
export const unLike = (postId) => ({type: "un-like", postId})
export const toSave = (postId) => ({type: "to-save", postId})
export const unSave = (postId) => ({type: "un-save", postId})

let startSection = {
        homePosts: [
          { isMe: false, id: 5, saved: false, liked: true, user: Spider, name: "Spider-Man", logo: Bridge, text: "This was my first fight with a big lizard."},
            { isMe: false, id: 0, saved: false, liked: false, user: BoyMax, name: "maXworker", logo: NewYork, text: "New York is beautiful!"},
            { isMe: false, id: 1, saved: false, liked: true, user: Cat, name: "black-cat", logo: Sea, text: "Lol"},
            { isMe: false, id: 2, saved: false, liked: false, user: GirlLara, name: "lara grom", logo: Kinder, text: "I recently bought a Kinder Surprise New Year 2022 chocolate egg. More precisely, two at once. One for my nephew, the other for my daughter. We came across such a ... wolf cub, or something ...There was also a string and a clothespin going to him."},
            { isMe: true, id: 3, saved: true, liked: false, user: User, name: "Danya_Sokol", logo: EmptyImg, text: "This is my first publication, so there won't be much text here.I learned how to work with props, and I'm very happy about it!"},
            { isMe: false, id: 4, saved: false, liked: false, user: Enot, name: "raccoon123", logo: Sky, text: "Got out of the house to photograph such a beautiful sunset."},
        ],
}

let homeSection = (state = startSection, action) => {
    if(action.type === "to-like") {
        let stateCopy = {
            ...state,

            homePosts: state.homePosts.map(u => {
              if (u.id === action.postId) {
                return { ...u, liked: true }
              }
              return u;
            })
          }
          return stateCopy;
        }
        if(action.type === "un-like") {
            let stateCopy2 = {
                ...state,
                homePosts: state.homePosts.map(u => {
                  if (u.id === action.postId) {
                    return { ...u, liked: false }
                  }
                  return u;
                })
              }
              return stateCopy2;
            }
            if(action.type === "to-save") {
              let stateCopy3 = {
                  ...state,
                  homePosts: state.homePosts.map(u => {
                    if (u.id === action.postId) {
                      return { ...u, saved: true }
                    }
                    return u;
                  })
                }
                return stateCopy3;
              }
              if(action.type === "un-save") {
                let stateCopy4 = {
                    ...state,
                    homePosts: state.homePosts.map(u => {
                      if (u.id === action.postId) {
                        return { ...u, saved: false }
                      }
                      return u;
                    })
                  }
                  return stateCopy4;
                }
        return state;
}

export default homeSection;