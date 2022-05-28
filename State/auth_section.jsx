import { authAPI } from "../api";
import { getMyProfileThunk } from "./profile_section";
export const setUserData = (id, email, login, isAuth) => ({ type: "set-us-data", data: { id, email, login, isAuth } })
export const isLoadLog = (load) => ({ type: "is-load-log", load })
const setCapthcaUrl = (UrlFile) => ({ type: "set-captcha-url", UrlFile })
const errorEmailPassword = (boolean_val) => ({ type: "set-error-email?password", boolean_val})
// const errorCaptca = (boolean_cap) => ({ type: "set-error-captcha", boolean_cap})

let startSection = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetch: false,
  captchaUrl: null,
  isErrorEmailPassword: false,
  // isErrorCaptcha: false
}

let authSection = (state = startSection, action) => {

  if (action.type === "set-us-data") {
    return {
      ...state,
      ...action.data,
    }
  }
  else if (action.type === "is-load-log") {
    return { ...state, isFetch: action.load }
  }
  else if (action.type === "set-captcha-url") {
    return { ...state, captchaUrl: action.UrlFile }
  }
  else if (action.type === "set-error-email?password") {
    return { ...state, isErrorEmailPassword: action.boolean_val }
  }
  // else if (action.type === "set-error-captcha") {
  //   return { ...state, isErrorCaptcha: action.boolean_cap }
  // }
  // document.cookie = ".ASPXAUTH=5F09C02C5E1081DEBDE20868AC1C10869CA0E423F4F689165799D99EBD2F2F3FF4AEB401F4726E3FC63D754E5C3F1F7117BFD11707DE8231912A6CF056754B3CA48967DD9C898A8C8B22A4094FB84130A3D81FF1"
  // document.cookie = ".ASP.NET_SessionId=5x0naeottgqb0n1vnbadnahy"
  // document.cookie = "._ym_uid=1646153104486614702"
  // document.cookie = "._ym_d=1646153104"
  // document.cookie = "._ym_isad=2"
  return state;
}

export var authMeThunk = () => {
  return (dispatch) => {
    dispatch(isLoadLog(true))
    authAPI.authMe().then(response => {
      if(response.data.resultCode === 0) {
        dispatch(isLoadLog(false))
        let {id, email, login} = response.data.data
        dispatch(setUserData(id, email, login, true))
        dispatch(getMyProfileThunk(id))
        // console.log(response.data.data)
          // window.location.reload() 
    }
    }
    )
  }
}

export var logInThunk = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.logIn(email, password, rememberMe, captcha).then(response => {
      if(response.data.resultCode === 0) {
        dispatch(authMeThunk())
        // console.log(response.data) 
        window.location.reload()
      } else if(response.data.resultCode === 10) {
        dispatch(getCaptchaThunk())
        // dispatch(errorCaptca(true))
        // console.log(response.data)
      } else if(response.data.resultCode === 1) {
        dispatch(errorEmailPassword(true))
        // console.log(response.data)
      }
    }
    )      
  }
}

export var logOutThunk = () => {
  return async (dispatch) => {
    let response = await authAPI.logOut()
      if(response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false, null))
      }
  }
}

// export const getCaptchaThunk = () => {
//   return async (dispatch) => {
//     const response = await authAPI.getCaptcha()
//     const captchaData = response.data.url
//     dispatch(setCapthcaUrl(captchaData))
//     console.log(response.data)
//   }
// }

export const getCaptchaThunk = () => {
  return (dispatch) => {
   authAPI.getCaptcha().then(response => {
    dispatch(setCapthcaUrl(response.data.url))
    // console.log(response)
   })
  }
}

export default authSection;