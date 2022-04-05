import React from "react";
import {
    Form,
    FormContainer,
    Input,
    Label,
    MainContainer
} from "../styles/StyleSingUp";
import UserAcctions from "../redux/actions/UserActions";
import { connect } from "react-redux"



export const SingUp = (props) => {

    const singup = (event) => {
        event.preventDefault(event)

        const data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            image: event.target[4].value,
        }
        props.userSingUp(data)
        console.log(data)
    }


    return (
        <MainContainer>
            <FormContainer>
                <Form onSubmit={singup}>
                    <Label for="name">Firt name</Label>
                    <Input id="name" />
                    <Label for="lastName" >Last name</Label>
                    <Input id="lastName" />
                    <Label for="mail" >Mail</Label>
                    <Input id="mail" />
                    <Label for="password" >Password</Label>
                    <Input id="password" />
                    <Label for="mail" >Url image</Label>
                    <Input id="mail" />
                    <Input type="submit" />
                </Form>
            </FormContainer>
        </MainContainer >
    )


}
const mapDispatchToProps = {
    userSingUp: UserAcctions.userSingUp
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp)