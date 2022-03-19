import {Container} from "./styles/Container.styled";
import {StyledFooter} from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";
import {Flex} from "./styles/Flex.styled";


function Footer()
{
    return (
        <StyledFooter>
            <Container> 
                 <img src="./images/logo_white.svg" alt="" />
                 <Flex>
                    <ul>
                        <li>Stay Healthy! </li>
                        <li> +90 999 *** **</li>
                        <li> helloword@fitty.com </li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                  <SocialIcons />
                </Flex>

                <p>&copy; 2022 Fitty. All rights reserved.</p>
            </Container>
        </StyledFooter>

    )
}

export default Footer;