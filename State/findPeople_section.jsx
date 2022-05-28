import { usersAPI, follow, unfollow } from "../api";
// import * as axios from "axios";
export const Sub = (usId) => ({ type: "Sub", usId })
export const unSub = (usId) => ({ type: "unSub", usId })
export const setPeopleAC = (newPeople) => ({ type: "set-people", newPeople })
export const setCurrPage = (p) => ({ type: "set-curr-page", p })
export const isLoad = (load) => ({ type: "is-load", load })
export const isDisabled = (disable) => ({ type: "is-disabled", disable })
export const errorPage = () => ({ type: "error-page" })
// export const setUsersCount = (count) => ({ type: "set-u-count", count })

let startSection = {
  people: [],
  pageSize: 100,
  totalUsersCount: 100000,
  currentPage: 1,
  isFetch: false,
  isDisabled: false,
  isErrorPage: false
}

let findPeopleSection = (state = startSection, action) => {

  if (action.type === "Sub") {
    let stateCopy = {
      ...state,
      people: state.people.map(p => {
        if (p.id === action.usId) {
          return { ...p, subscribed: true }
        }
        return p;
      })
    }
    return stateCopy;
  }
  else if (action.type === "unSub") {
    let stateCopy2 = {
      ...state,
      people: state.people.map(p => {
        if (p.id === action.usId) {
          return { ...p, subscribed: false }
        }
        return p;
      })
    }
    return stateCopy2;
  }
  else if (action.type === "set-people") {
    return { ...state, people: action.newPeople }
  }
  else if (action.type === "set-curr-page") {
    return { ...state, currentPage: action.p }
  }
  else if (action.type === "is-load") {
    return { ...state, isFetch: action.load }
  }
  else if (action.type === "is-disabled") {
    return { ...state, isDisabled: action.disable }
  }
  else if (action.type === "error-page") {
    return { ...state, isErrorPage: true }
  }
  return state;
}

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(isLoad(true))
    usersAPI.getUsers(currentPage, pageSize).then(response => {
      if(response.items == []) {
        dispatch(isLoad(false))
        dispatch(errorPage())
      } else {
      dispatch(isLoad(false))
      dispatch(setPeopleAC(response.items))
      }
    })
  }
}
export const getUsersThunk_changed = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrPage(pageNumber))
    dispatch(isLoad(true))
        usersAPI.getUsers_changed(pageNumber, pageSize).then(response => {
          if(response.items == []) {
            dispatch(isLoad(false))
            dispatch(errorPage())
          } else {
          dispatch(isLoad(false))
          dispatch(setPeopleAC(response.items))
          }
        })
  }
}

export const unSubThunk = (userId) => {
  return (dispatch) => {
    dispatch(isDisabled(true))
    usersAPI.unfollow(userId).then(response => {
                        // console.log(response.data)
                        if(response.data.resultCode == 0) {
                            dispatch(isDisabled(false))
                            dispatch(unSub(userId))
                        }
                    })
  }
}

export const subThunk = (userId) => {
  return (dispatch) => {
    dispatch(isDisabled(true))
                    usersAPI.follow(userId).then(response => {
                        // console.log(response.data)
                        if(response.data.resultCode == 0) {
                            dispatch(isDisabled(false))
                            dispatch(Sub(userId))
                        }
                    })
  }
}

export default findPeopleSection;