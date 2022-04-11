import React from 'react';
import GoogleLogin from 'react-google-login'
/* import { connect } from 'react-redux'; */
/* import userActions from '../../redux/actions/userActions'; */
import { GoogleButton } from "../styles/StyleSign";

function GoogleSignUp(props) {

  const responseGoogle = (response) => {
      console.log(response);
      const googleUser = {
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        email: response.profileObj.email,
        password: response.profileObj.googleId,
        google: true,
      }
    }



  return (
    <GoogleButton>
    <GoogleLogin
      clientId="213097106218-go202vf7di8bbd7c7g9vkn685ptqdbeh.apps.googleusercontent.com"
      buttonText="Sign Up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    </GoogleButton>

  );
}
export default GoogleSignUp;
/* const mapStateToProps = (state) => {
    return{
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}
export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignUp); */


