import React from "react";
import FacebookLogin from "react-facebook-login";
/* import { connect } from "react-redux";
import userActions from "../../redux/action/userAction"; */
import {FacebookButton} from '../styles/StyleSign';

function FacebookSignIn(props) {
  const responseFacebook = async (res) => {
    console.log(res);
    const logedUser = {
      email: res.email,
      Image: res.picture.data.url,
      country: "facebook",
      password: res.id,
      from: "facebook",
    };
    await props.signIn(logedUser);
  };

  return (
    <FacebookButton>
    <FacebookLogin
      icon="fa-facebook"
      textButton="Log In with Facebook"
      appId="1096093190965715"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
    </FacebookButton>
  );
}
export default FacebookSignIn;
/* const mapDispatchToProps = {
  signIn: userActions.signIn,
};

export default connect(null, mapDispatchToProps)(FacebookSignIn); */