import React from 'react';
import GoogleLogin from 'react-google-login'
/* import { connect } from 'react-redux'; */
/* import userActions from '../../redux/actions/userActions'; */
import { GoogleButton } from "../styles/StyleSign";

function GoogleSignUp(props) {

  const responseGoogle = async (res) => {
    const data = {
      /* userName: res.profileObj. , */
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      URLImage: res.profileObj.imageUrl,
      from: "google"
    }
    /* await props.signUpUser(userData) */
  }

  return (
    <GoogleButton>
    <GoogleLogin
      className="buttonsocial buttonGoogle"
      clientId="346395293099-1jgf07kf4uhjdct237hsk4j0j0ff512o.apps.googleusercontent.com"
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


