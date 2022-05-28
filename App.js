import React, { Suspense } from 'react';
import './App.css';
import Log from "./components/Login/Login.module.css";
import { connect } from 'react-redux';
import Header_container from './components/Header/Header_container';
import ContentLeft from './components/ContentLeft/ContentLeft';
import ContentRight_container_connect from './components/ContentRight/ContentRightContainer';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Profile_right_container_connect from "./components/SecondPages/Profile/ContentRightContainer";
import Friends_right_container_connect from "./components/SecondPages/Friends/ContentRightContainer";
import Messages_right_container_connect from "./components/SecondPages/Messages/ContentRightContainer";
import FindPeople_container_connect from "./components/SecondPages/Friends/FindPeople/find_people_container";
import Content_right_container_connect from "./components/SecondPages/UserProfile/ContentRightUP_container.jsx";
import Settings_container_connect from "./components/SecondPages/Settings/settings_container.jsx";
import Music_container_connect from "./components/SecondPages/Music/music_container.jsx";
import { authMeThunk } from "./State/auth_section"

// import Registration_container_connect from "./components/Login/Login.jsx";
 
import { isInitialized } from "./State/app_section";
import { Provider } from "react-redux";
import Store from "./State/state_redux";
import lazyRoutePages from "./hocLazyLoad";

let Registration_container_connect = React.lazy(() => import('./components/Login/Login(react_hook).jsx'))

let lazyRoutePagesComponent = lazyRoutePages(Registration_container_connect);

const LazyRoutePagesComponentConnect = connect(null, null)(lazyRoutePagesComponent)

class App extends React.Component {

  componentDidMount() {
    this.props.isInitialized()
  }

  render() {
    if (!this.props.initialized) {
      return <div></div>
    }
    else {
      return (
        <HashRouter>
          <div className='main_container'>
          <div className='container'>
            <Header_container />
            <div className='mains_two'>
              <ContentLeft />
              <Routes>
                <Route basename={process.env.PUBLIC_URL} path="/" element={<ContentRight_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/MyProfile" element={<Profile_right_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/Friends" element={<Friends_right_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/profile/:userId" element={<Content_right_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/Friends/Find" element={<FindPeople_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/Settings" element={<Settings_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/Music" element={<Music_container_connect />} />
                <Route basename={process.env.PUBLIC_URL} path="/Login" element={
                  <div className={Log.main_right}>
                    <div className={Log.block_name}>Login</div>
                    <LazyRoutePagesComponentConnect />
                  </div>} />
                <Route path="/Messages" element={
                  <Messages_right_container_connect />} />
              </Routes>
            </div>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
}

let mapStateToProps = (state) => ({
  initialized: state.appSection.initialized
})

let AppContainer = connect(mapStateToProps, { isInitialized, authMeThunk })(App);

let ProviderApp = (props) => {
  return <Provider store={Store}>
    <AppContainer />
  </Provider>
}

let MainApp = (props) => {
  return <ProviderApp />
} 

export default MainApp;




