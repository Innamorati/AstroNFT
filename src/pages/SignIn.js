import React from 'react';
import { Form, FormContainer, Input, Label, MainContainer, Title, SignInButton, GoogleButton, FacebookButton, CallToAction, RememberMe, Or } from "../styles/StyleSign";
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../redux/actions/UserActions';
import GoogleSignIn from '../components/GoogleSignIn';
import FacebookSignIn from "../components/FacebookLogIn";

const SignIn = (props) => {

    const signin = (event) => {
        event.preventDefault()

        const data = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "signin"
        }
        props.userLoging(data);
        // console.log(data);
    }

    return (
        <MainContainer style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/assets/backgroundSignIn.png'}')`, backgroundSize: 'cover' }}>
            <FormContainer>
                <Form onSubmit={signin}>
                    <Title>Welcome Back!</Title>
                    <Label htmlfor="mail" >Email</Label>
                    <Input id="mail" type="email" />
                    <Label htmlfor="password" >Password</Label>
                    <Input id="password" type="password" />
                    <RememberMe>
                        <input type="radio" id="rememberMe" />
                        <label for="rememberMe">Remember me</label>
                    </RememberMe>
                    <SignInButton>
                        <button type="submit">Log In</button>
                    </SignInButton>
                    <Or>
                        <p> - or - </p>
                    </Or>
                    <GoogleSignIn />
                    <FacebookSignIn />
                    <CallToAction>Forgot your password? <a>click here</a></CallToAction>
                    <CallToAction>Don't have an account? <LinkRouter to={'/signup'}>click here</LinkRouter></CallToAction>
                </Form>
            </FormContainer>
        </MainContainer >
    );
}

const mapDispatchToProps = {
    userLoging: userActions.userLoging,
}

export default connect(null, mapDispatchToProps)(SignIn);