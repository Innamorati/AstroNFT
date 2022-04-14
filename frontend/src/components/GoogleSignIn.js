import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../redux/actions/UserActions';
import { GoogleButton } from '../styles/StyleSign';

function GoogleSignIn(props) {

    const responseGoogle = (res) => {

        const data = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            from: "google"
        }
        props.userLoging(data)
    }
    console.log(props)
    return (
        <GoogleButton>
            <GoogleLogin
                clientId="213097106218-go202vf7di8bbd7c7g9vkn685ptqdbeh.apps.googleusercontent.com"
                buttonText="Log In with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </GoogleButton>

    );
}

const mapDispatchToProps = {
    userLoging: userActions.userLoging,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn); 