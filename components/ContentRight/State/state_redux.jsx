import { createStore, combineReducers } from "redux";
import messagesSection from "./messages_section";

let redusers = combineReducers({
     messagesSection
})

let Store = createStore(redusers);
 
export default Store;