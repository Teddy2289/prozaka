import {ThemeProvider} from "styled-components";
import {MainBody, Container} from "./styled/Global.styled";
import {theme} from './utils/Theme'
import ShowCase from "./components/ShowCase/ShowCase";
import MySkils from "./components/Skyles/MySkils";
import Project from "./components/Projet/Project";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import topFadeImg from "./assets/top.png"
import FadeImg from "./assets/left.png"
import {FadeImage} from "./styled/Global.styled";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainBody>
                <NavBar/>
                <Container>
                    <ShowCase/>
                    <MySkils/>
                    <Project/>
                    <Footer/>
                </Container>
                <FadeImage src={topFadeImg} top="0"/>
                <FadeImage src={FadeImg} top="30vh"/>
            </MainBody>
        </ThemeProvider>
    );
}

export default App;
