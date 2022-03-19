import { ThemeProvider } from 'styled-components'
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: '#A2D989',
    body: '#496F22',
    footer: '#0B4619',
  },
  mobile: '768px',
}

function App()
{
  return (
  <ThemeProvider theme={theme}>
    <>
     <GlobalStyles />
      <Header />
      <Container>
      {content.map((item, index) => (
        <Card key={index} item={item} />
      )
      )}
       
      </Container>
      <Footer />
    </>
  </ThemeProvider>)
}
export default App;



