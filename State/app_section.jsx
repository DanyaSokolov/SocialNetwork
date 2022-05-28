import { authMeThunk } from "./auth_section"
export const toInitialize = () => ({ type: "to-initialize" })

let startSection = {
  initialized: false
}

let appSection = (state = startSection, action) => {
  if (action.type === "to-initialize") {
    return { ...state, initialized: true}
  }
  return state;
}

export const isInitialized = () => {
  return (dispatch) => { 
    let promise = dispatch(authMeThunk())
    Promise.all([promise]).then(() => {
      dispatch(toInitialize())
    })
  }
}

export default appSection;