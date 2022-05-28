import React, { Suspense } from 'react';
import './App.css';
import Loading from "./loading.png";

const lazyRoutePages = (Component) => {
    return (props) => {
        return <Suspense fallback={
            <div class="loading_main">
                <img class="loading" src={Loading}></img>
            </div>}>
            <Component {...props} />
        </Suspense>
    }
}

export default lazyRoutePages;