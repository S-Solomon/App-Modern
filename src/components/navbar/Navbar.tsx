import React, { MouseEvent, useState } from 'react'
import styled from 'styled-components'
import logoLight from '../../assets/logoLight.svg'
import logoDark from '../../assets/logoDark.svg'
import { IoMdMenu } from 'react-icons/io';
import SideDrawer from '../sidedrawer/SideDrawer'
import { Link } from 'react-scroll'

interface Props {
    isScrolling: number;
}

const Navbar = ({ isScrolling }: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const backdropClickHandler = (e: MouseEvent<SVGElement>) => {
        setDrawerOpen(false);
    };

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
                        <Link
                            to="home"
                            smooth={true}
                            duration={300}
                            activeClass="green"
                        >
                            Home
                        </Link>
                        <Link
                            to="features"
                            smooth={true}
                            duration={400}
                            activeClass="green"
                        >
                            Features
                        </Link>
                        <Link
                            to="testimonial"
                            smooth={true}
                            duration={500}
                            activeClass="green"
                        >
                            Testimonial
                        </Link>
                        <Link
                            to="pricing"
                            smooth={true}
                            duration={600}
                            activeClass="green"
                        >
                            Pricing
                        </Link>
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
                        <IoMdMenu
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            data-testid="burger"
                        />
                    </Burger>
                </ButtonsContainer>
            </NavbarStyled>
            {drawerOpen ? (
                <SideDrawer
                    closeDrawer={backdropClickHandler}
                    data-testid="drawer"
                />
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
    transition: 0.2s all ease;
    
    @media (min-width: 768px) {
        padding: 1rem 2rem;
    }
    @media screen and (min-width: 900px) {
        padding: 1rem 8rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 1rem 4rem;
    }
    @media screen and (min-width: 1300px) {
        padding: 1rem 8rem;
    }
    @media screen and (min-width: 1440px) {
        padding: 1rem 12rem;
    }
    @media screen and (min-width: 1900px) {
        padding: 1rem 18rem;
    }
    
    @media screen and (min-width: 2100px) {
        padding: 1rem 20rem;
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
        &:hover {
            color: var(--secondary-color);
        }
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
    @media screen and (min-width: 1600px) {
        padding: 0.8rem 1.8rem;
        font-size: 1rem;
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