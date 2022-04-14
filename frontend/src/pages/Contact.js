import React from "react";
import {
    ContactBack,
    ContactContainer,
    Title,
    label,
    input,
    Form,
    Text,
    ContactButton,
    Select,
    ContactInputs
} from "../styles/StyledContact";
import swal from "sweetalert"


const Contact = () => {
    const showAlert = () => {
        swal({
            title: "AstroNFT",
            text: "Are you sure you want to send this message?",
            icon: "warning",
            buttons: ["no", "yes"]
        }).then(response => {
            if (response) {
                swal({ text: "your message has been successfully sent!!", icon: "success", timer: "2000" })
            }
        })
    }

    return (
        <ContactBack>
            <ContactContainer>
                <Form onSubmit={Contact}>
                    <Title>Contact</Title>
                    <ContactInputs>
                        <label for="name">First Name</label>
                        <input id="name" type="name" />
                        <label for="lastName">Last name</label>
                        <input id="lastName" />
                        <label for="phone">Phone</label>
                        <input id="phone" type="text" />
                        <label for="mail">Email</label>
                        <input id="mail" type="email" />
                    </ContactInputs>
                    <Select>
                        <select name="select">
                            <option>Select an option</option>
                            <option>Inquiry</option>
                            <option>Claims</option>
                            <option>Suggestions</option>
                        </select>
                    </Select>
                    <Text>
                        <textarea placeholder="mesage"></textarea>
                    </Text>
                    <ContactButton>
                        <button onClick={() => showAlert()} type="submit">Send</button>
                    </ContactButton>
                </Form>
            </ContactContainer>
        </ContactBack>
    );

};

export default Contact;
