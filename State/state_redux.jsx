import { applyMiddleware, createStore, combineReducers } from "redux";
import messagesSection from "./messages_section";
import homeSection from "./home_section";
import profileSection from "./profile_section";
import friendsSection from "./friends_section";
import findPeopleSection from "./findPeople_section";
import profileUserSection from "./profileUser_section";
import authSection from "./auth_section";
import musicSection from "./profileUser_section";
import settingsSection from "./profileUser_section";
import appSection from "./app_section";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers({
     messagesSection,
     homeSection,
     profileSection,
     friendsSection,
     findPeopleSection,
     profileUserSection,
     authSection,
     musicSection,
     settingsSection,
     form: formReducer,
     appSection
})

let Store = createStore(redusers, applyMiddleware(thunk));
 
window.Store = Store;
 
export default Store;