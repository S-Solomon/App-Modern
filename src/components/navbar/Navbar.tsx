import React, { useState } from 'react'
import styled from 'styled-components'
import logoLight from '../../assets/logoLight.svg'
import logoDark from '../../assets/logoDark.svg'
import { IoMdMenu } from 'react-icons/io';
import SideDrawer from '../sidedrawer/SideDrawer'

interface Props {
    isScrolling: number;
}

const Navbar = ({ isScrolling }: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const backdropClickHandler = () => {
        setDrawerOpen(false)
    }

    return (
        <React.Fragment>
            <NavbarStyled className={isScrolling > 0 ? 'navbarScrolled' : ''}>
                <ContainerStyled>
                    <LogoStyled>
                        <img
                            src={isScrolling ? logoDark : logoLight}
                            alt="logo"
                        />
                    </LogoStyled>
                    <LinksStyled
                        className={isScrolling > 0 ? 'linksScrolled' : ''}
                    >
                        <a href="/">Home</a>
                        <a href="/">Features</a>
                        <a href="/">Testimonial</a>
                        <a href="/">Pricing</a>
                    </LinksStyled>
                </ContainerStyled>
                <ButtonsContainer>
                    <ButtonStyled
                        className={isScrolling > 0 ? 'buttonScrolled' : ''}
                        aria-label="Get Started"
                        data-testid="buttonTest"
                    >
                        Get Started
                    </ButtonStyled>
                    <Burger className={isScrolling > 0 ? 'menuScrolled' : ''}>
                        <IoMdMenu onClick={() => setDrawerOpen(!drawerOpen)} data-testid='burger'/>
                    </Burger>
                </ButtonsContainer>
            </NavbarStyled>
            {drawerOpen ? (
                <SideDrawer closeDrawer={backdropClickHandler} data-testid='drawer'/>
            ) : null}
        </React.Fragment>
    );
}

export default Navbar


const NavbarStyled = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s all ease;
    /* @media screen and (min-width: 800px) {
        padding: 1rem 8rem;
    } */
    @media (min-width: 768px) {
        padding: 1rem 2rem;
    }
    @media (min-width: 1200px) {
        padding: 1rem 8rem;
    }
`;
const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
`;

const LogoStyled = styled.div`
    img {
        color: white;
        color: black;
        cursor: pointer;
        width: 8rem;
        @media(min-width: 500px) {
            width: 11rem;
        }
        @media(max-width: 280px) {
            width: 5rem;
        }
    }
`

const LinksStyled = styled.div`
    display: none;
    @media(min-width: 1000px) {
        display: flex;
    }
    a {
        text-decoration: none;
        color: white;
        margin-left: 2rem;
        cursor: pointer;
    }
`;

const ButtonStyled = styled.button`
    font-family: 'DM Sans', sans-serif;
    padding: .8rem 1.5rem;
    border-radius: 50px;
    color: white;
    background: transparent;
    outline: none;
    border: 1.5px solid white;
    cursor: pointer;
    font-size: 0.8rem;
    display: inline-block;
    transition: all 0.25s;
    font-weight: 500;
    &:hover {
        background: white;
        color: var(--primary-color);
    }
`;

const Burger = styled.div`
    margin-left: 1rem;
    svg {
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    }
    @media (min-width: 1000px) {
        display: none;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    @media (min-width: 500px) {
        width: unset;
    }
`;