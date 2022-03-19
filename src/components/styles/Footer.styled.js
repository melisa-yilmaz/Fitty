import styled from "styled-components";


export const StyledFooter = styled.footer`
  @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&family=Fredoka:wght@300&family=Hurricane&family=Poppins:wght@300&display=swap");
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    
    list-style-type: none;
  }
  ul li {
    font-family: 'Fredoka';
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`