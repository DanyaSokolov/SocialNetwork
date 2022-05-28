import { profileAPI } from "../api";
const setUserP = (userPage) => ({ type: "set-user", userPage })
export const isLoad = (load) => ({ type: "is-load", load })
export const setStatus = (userStatus) => ({ type: "set-status", userStatus })

let startSection = {
  user: {
    photos: {
      large: "Some photo"
    }
  },
  status: "",
  isFetch: false
}

let profileUserSection = (state = startSection, action) => {
  if (action.type === "set-user") {
    return { ...state, user: action.userPage }
  }
  else if (action.type === "is-load") {
    return { ...state, isFetch: action.load }
  }
  else if (action.type === "set-status") {
    return { ...state, status: action.userStatus }
  }
  return state;
}

export const getProfileThunk = (params) => {
  return (dispatch) => {
    dispatch(isLoad(true))
    profileAPI.getProfile(params).then(response => {
      dispatch(isLoad(false))
      dispatch(setUserP(response.data))
    })
  }
}

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(
      response => {
        dispatch(setStatus(response.data))
        
      }
    )
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(
      response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      }
    )
  }
}

export default profileUserSection;