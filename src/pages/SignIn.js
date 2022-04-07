import React from 'react';
import { Form, FormContainer, Input, Label, MainContainer, Title, SignUpButton, GoogleButton, FacebookButton, CallToAction } from "../styles/StyleSign";
import {Link as LinkRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../redux/actions/UserActions';

const SignIn = (props) => {

    const signin = (event) => {
        event.preventDefault()

        const data = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "signin"
        }
        props.userLogin(data);
        console.log(data);
    }

    return (
        <MainContainer style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/assets/signUpBackground.png'}')`, backgroundSize: 'cover' }}>
            <FormContainer>
                <Form onSubmit={signin}>
                    <Title>Welcome Back!</Title>
                    <Label for="mail" >Email</Label>
                    <Input id="mail" type="email" />
                    <Label for="password" >Password</Label>
                    <Input id="password" type="password" />
                    <Input type="radio" id="rememberMe" />
                    <Label for="rememberMe">Remember me</Label>
                    <SignUpButton>
                        <Input type="submit" value={"Log In"} />
                    </SignUpButton>
                    <p> - or - </p>
                    <GoogleButton type="submit">Google</GoogleButton>
                    <FacebookButton type="submit">Facebook</FacebookButton>
                    <CallToAction>Forgot your password? <a>click here</a></CallToAction>
                    <CallToAction>Don't have an account? <LinkRouter to={'/signup'}>click here</LinkRouter></CallToAction>
                </Form>
            </FormContainer>
        </MainContainer >
    );
}

const mapDispatchToProps = {
    userLogin: userActions.userLogin,
}

export default connect(null, mapDispatchToProps)(SignIn);