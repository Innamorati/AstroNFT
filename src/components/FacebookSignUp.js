import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import userActions from "../redux/actions/UserActions";
import { FacebookButton } from '../styles/StyleSign';

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {

    const nameSeparate = res.name.split(" ");
    let name = nameSeparate[0];
    let lastName = nameSeparate[1];

    const data = {
      name: nameSeparate[0],
      lastName: nameSeparate[1],
      email: res.email,
      password: res.id,
      from: "facebook",
    };
    // await props.userSignUp(data);
  };

  return (
    <FacebookButton>
      <FacebookLogin
        icon="fa-facebook"
        textButton=" Sign Up with Facebook"
        appId="498196445304346"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </FacebookButton>
  );
}

const mapDispatchToProps = {
  userSignUp: userActions.userSignUp,
}

export default connect(null, mapDispatchToProps)(FacebookSignUp); 