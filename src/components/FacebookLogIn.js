import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import userActions from "../redux/actions/UserActions";
import { FacebookButton } from '../styles/StyleSign';

function FacebookSignIn(props) {

  const responseFacebook = async (res) => {
    console.log(res);

    const data = {
      email: res.email,
      Image: res.picture.data.url,
      password: res.id,
      from: "facebook",
    };
    await props.userLoging(data);
  };

  return (
    <FacebookButton>
      <FacebookLogin
        icon="fa-facebook"
        textButton="Log In with Facebook"
        appId="498196445304346"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </FacebookButton>
  );
}

const mapDispatchToProps = {
  userLoging: userActions.userLoging,
};

export default connect(null, mapDispatchToProps)(FacebookSignIn); 