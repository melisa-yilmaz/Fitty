import React from "react";
import {StyledHeader, Nav, Logo, Image} from "./styles/Header.styled";
import {Container} from  "./styles/Container.styled";
import {Button} from  "./styles/Button.styled";
import {Flex} from "./styles/Flex.styled";

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt=''/>
                    <h1>Fitty</h1>
                    <Button>Try It Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1> Make Yourself Healthy </h1>
                        <p>
                        We are here to help your diet, be healthy and fit. We will provide you with regular exercise programs, healthy recipes and things to consider for your health.
                        </p>
                        <Button bg="#fff" color="#5B8C2A">
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src="./images/activity-tracker.svg"/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header;