import React from 'react';
import { connect } from 'react-redux';
import userActions from '../redux/actions/UserActions';
import {
    Form,
    FormContainer,
    Input,
    Label,
    MainContainer,
    Title, SignUpButton, GoogleButton, FacebookButton, CallToAction
} from "../styles/StyleSingUp";

const SignIn = (props) => {

    const signin = (event) => {
        event.preventDefault()

        const data = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "signin"
        }
        props.userLogin(data);
        // console.log(data);
    }

    return (
        <MainContainer style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/assets/signUpBackground.png'}')`, backgroundSize: 'cover' }}>
            <FormContainer>
                <Form onSubmit={signin}>
                    <Title>Welcome Back!</Title>
                    <Label htmlfor="mail" >Email</Label>
                    <Input id="mail" type="email" />
                    <Label htmlfor="password" >Password</Label>
                    <Input id="password" type="password" />
                    <Input type="checkbox" id="rememberMe" />
                    <Label htmlfor="rememberMe">Remember me</Label>
                    <SignUpButton>
                        <Input type="submit" value={"Log In"} />
                    </SignUpButton>
                    <p> - or - </p>
                    <GoogleButton type="submit">Google</GoogleButton>
                    <FacebookButton type="submit">Facebook</FacebookButton>
                    <CallToAction>Forgot your password? <a>click here</a></CallToAction>
                </Form>
            </FormContainer>
        </MainContainer >
    );
}

const mapDispatchToProps = {
    userLogin: userActions.userLogin,
}

export default connect(null, mapDispatchToProps)(SignIn);