import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../redux/actions/UserActions';
import { GoogleButton } from "../styles/StyleSign";

function GoogleSignUp(props) {

  const responseGoogle = (response) => {
    console.log(response);
    const data = {
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      from: "google",
      image: response.profileObj.imageUrl,
    }
    console.log(response)
    props.userSignUp(data)
  }


  console.log(props)
  return (

    <GoogleButton>
      <img src={process.env.PUBLIC_URL + '/assets/google.png'} alt="google" width={20} height={20}/>
      <GoogleLogin
        clientId="213097106218-go202vf7di8bbd7c7g9vkn685ptqdbeh.apps.googleusercontent.com"
        buttonText=" Sign Up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleButton>

  );
}

const mapDispatchToProps = {
  userSignUp: userActions.userSignUp,

}
export default connect(null, mapDispatchToProps)(GoogleSignUp);


