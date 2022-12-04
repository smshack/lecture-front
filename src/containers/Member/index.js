import React, { useEffect, useContext } from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "../../context/AuthContext"
const Member = props => {
    const { authState, setAuthState } = useContext(AuthContext);
    useEffect(() => {
        console.log(authState, "authState");
    }, [authState]);
  return <div>{authState.username}</div>;
}

Member.propTypes = {}

export default Member