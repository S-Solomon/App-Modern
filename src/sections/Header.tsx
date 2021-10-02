import styled from "styled-components"
import { OuterLayout } from "../styles/Layout"
import bannerBg from '../assets/bannerBg.png'
import Navbar from "../components/navbar/Navbar"


const Header = () => {
    return (
        <HeaderStyled>
            <OuterLayout>
                <Navbar />
            </OuterLayout>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bannerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    background-color: #1F3E76;
    overflow: hidden;
`;
