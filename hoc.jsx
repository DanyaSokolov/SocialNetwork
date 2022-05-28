import React, { Suspense } from 'react';
import { Navigate } from "react-router-dom";

const lazyRoutePages = (Component) => {
    return (props) => {
     return <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
    }
}

const NavigatePage = (Component) => {
    class navCom extends React.Component {
        render() {
            if (!this.props.isAuth) { return <Navigate to="/" /> }
            else { return <Component {...this.props} /> }
        }
    }
    return navCom;
}

export default NavigatePage;