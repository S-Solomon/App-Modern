import React from "react";
import styled from 'styled-components'
import facebook from '../../assets/drawer/facebook.svg'
import twitter from '../../assets/drawer/twitter.svg'
import github from '../../assets/drawer/github.svg'
import dribble from '../../assets/drawer/dribble.svg'
import { IoMdClose } from 'react-icons/io';
import BackDrop from "./BackDrop";

interface Props {
    closeDrawer: any;
}

const SideDrawer = ( {closeDrawer}:Props ) => {
    return (
        <React.Fragment>
            <DrawerStyled>
                <IoMdClose className="menuClose" onClick={closeDrawer} data-testid='menuClose'/>
                <Wrapper>
                    <div className="nav">
                        <a href="/">Home</a>
                        <a href="/">Features</a>
                        <a href="/">Testimonial</a>
                        <a href="/">Pricing</a>
                    </div>
                    <div className="social">
                        <a href="facebook.com" target="_blank">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="twitter.com" target="_blank">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="github.com" target="_blank">
                            <img src={github} alt="" />
                        </a>
                        <a href="dribble.com" target="_blank">
                            <img src={dribble} alt="" />
                        </a>
                    </div>
                </Wrapper>
            </DrawerStyled>
            <BackDrop closeDrawer={closeDrawer} />
        </React.Fragment>
    );
};

export default SideDrawer

const DrawerStyled = styled.div`
    background-color: white;
    color: black;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    padding: 100px 30px 40px;
    transition: width  0.5s ease-in;
    .menuClose {
        position: absolute;
        top: 3%;
        right: 10%;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .nav {
        display: flex;
        flex-direction: column;
        a {
            padding: 15px 0;
            cursor: pointer;
            text-decoration: none;
            font-weight: 500;
            color: var(--primary-color);
            color: #343d48;
            border-bottom: 1px solid var(--border-color);
            font-family: 'DM Sans', sans-serif;
            &:hover {
                color: var(--secondary-color);
            }
        }
    }
    .social {
        margin: 0 auto;
        a {
            cursor: pointer;
            margin-left: 0.8rem;
            img {
                color: var(--secondary-color);
                svg {
                    background: var(--secondary-color);
                }
            }
        }
    }
`;