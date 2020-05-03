import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({auth: state.auth.isAuth});

export const withAuthRedirect = (Component) => {
    let AuthRedirectComponent = (props) => {
        if (!props.auth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(AuthRedirectComponent)

    return ConnectedAuthRedirectComponent
}