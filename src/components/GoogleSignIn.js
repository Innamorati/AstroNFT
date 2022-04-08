import React from 'react';
import GoogleLogin from 'react-google-login'
/* import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions'; */
import { GoogleButton } from '../styles/StyleSign';

function GoogleSignIn(props) {

    const responseGoogle = async (res) => {
    const data = {
        email: res.profileObj.email,
        password: res.profileObj.googleId,
        from: "google"
    }
    /* await props.signInUser(logedUser) */
}

    return (
    <GoogleButton>
    <GoogleLogin
        clientId="346395293099-1jgf07kf4uhjdct237hsk4j0j0ff512o.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    </GoogleButton>

    );
}
export default GoogleSignIn;
/* 
const mapDispatchToProps = {
    signInUser: userActions.signInUser,

} */
/* 
export default connect(null, mapDispatchToProps)(GoogleSignIn); */