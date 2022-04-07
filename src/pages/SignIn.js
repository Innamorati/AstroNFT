import React from 'react';
import {
    Form,
    FormContainer,
    Input,
    Label,
    MainContainer,
    Title, SignUpButton, GoogleButton, FacebookButton, CallToAction
} from "../styles/StyleSingUp";

const SignIn = () => {

    const singin = (event) => {
        event.preventDefault(event)

        const data = {
            email: event.target[1].value,
            password: event.target[2].value,
            from: "signin"
        }
      /*   props.userSingUp(data)
        console.log(data) */
    }

    return (  
        <MainContainer style={{backgroundImage: `url('${process.env.PUBLIC_URL+'/assets/signUpBackground.png'}')`, backgroundSize: 'cover'}}>
            <FormContainer>
                <Form onSubmit={singin}>
                    <Title>Welcome Back!</Title>
                    <Label for="mail" >Email</Label>
                    <Input id="mail" type="email" />
                    <Label for="password" >Password</Label>
                    <Input id="password" type="password" />
                    <Input type="radio" id="rememberMe"/>
                    <Label for="rememberMe">Remember me</Label>
                    <SignUpButton>
                    <Input type="submit" value={"Log In"}/>
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

export default SignIn;