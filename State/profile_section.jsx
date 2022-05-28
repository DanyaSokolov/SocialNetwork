import User from "../user_logo_two.png";
import EmptyImg from "../placeholder.png";
import { profileAPI } from "../api";
export const toLike = (postId) => ({ type: "to-like", postId })
export const unLike = (postId) => ({ type: "un-like", postId })
export const toSave = (postId) => ({ type: "to-save", postId })
export const unSave = (postId) => ({ type: "un-save", postId })
export const isLoad = (load) => ({ type: "is-load", load })
export const isPhotoSet = (photo) => ({ type: "is-photo-set", photo })
export const setPhotoCh = () => ({ type: "is-photo-ch",  })
export const setMyP = (userPage) => ({ type: "set-me", userPage })

let startSection = {
  me: {
    photos: {
      large: "Some photo"
    }
  },
  photoCh: "not changed",
  myPosts: [
    { id: 0, saved: false, liked: false, user: User, name: "Danya_Sokol", logo: EmptyImg, text: "This is my first publication, so there won't be much text here.I learned how to work with props, and I'm very happy about it!" },
  ],
  isFetch: false
}

let profileSection = (state = startSection, action) => {
  if (action.type === "to-like") {
    let stateCopy = {
      ...state,
      myPosts: state.myPosts.map(u => {
        if (u.id === action.postId) {
          return { ...u, liked: true }
        }
        return u;
      })
    }
    return stateCopy;
  }
  if (action.type === "un-like") {
    let stateCopy2 = {
      ...state,
      myPosts: state.myPosts.map(u => {
        if (u.id === action.postId) {
          return { ...u, liked: false }
        }
        return u;
      })
    }
    return stateCopy2;
  }
  if (action.type === "to-save") {
    let stateCopy3 = {
      ...state,
      myPosts: state.myPosts.map(u => {
        if (u.id === action.postId) {
          return { ...u, saved: true }
        }
        return u;
      })
    }
    return stateCopy3;
  }
  if (action.type === "un-save") {
    let stateCopy4 = {
      ...state,
      myPosts: state.myPosts.map(u => {
        if (u.id === action.postId) {
          return { ...u, saved: false }
        }
        return u;
      })
    }
    return stateCopy4;
  }
  if (action.type === "is-photo-ch") {
    window.location.reload() 
    return { ...state, photoCh: "changed (update the page)" }
  }
  else if (action.type === "is-load") {
    return { ...state, isFetch: action.load }
  }
  if (action.type === "set-me") {
    return { ...state, me: action.userPage }
  }
  return state;
}

export const getMyProfileThunk = (params) => {
  return (dispatch) => {
    dispatch(isLoad(true))
    profileAPI.getMyProfile(params).then(response => {
      dispatch(isLoad(false))
      dispatch(setMyP(response.data))
      // console.log(response)
    })
  }
}

export const setPhoto = (file) => {
  return (dispatch) => {
    profileAPI.putPhoto(file).then(
      response => {
        if (response.data.resultCode === 0) {
          dispatch(isPhotoSet(response.data.data.photos))
          dispatch(setPhotoCh())
        }
      }
    )
  }
}

export default profileSection;