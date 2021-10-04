import React, {useState, useEffect } from 'react';
import styled from "styled-components"
import { InnerLayout, OuterLayout } from "../styles/Layout"
import bannerBg from '../assets/bannerBg.png'
import Navbar from "../components/navbar/Navbar"
import bannerThumb from '../assets/bannerThumb.png'
import watchvideo from '../assets/watchvideo.svg'
import paypal from '../assets/paypal.svg'
import google from '../assets/google.svg'
import dropbox from '../assets/dropbox.svg'
import Modal from '../components/modal/Modal'

type ClickHandler = () => void;
type ScrollHandler = () => void;

export default function Header() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    const handleScroll: ScrollHandler = () => {
        const position = window.scrollY;
        setScrollHeight(position);
    };

    const modalClickHandler: ClickHandler = () => {
        setModalActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [scrollHeight])

    return (
        <React.Fragment>
            <HeaderStyled>
                <Navbar isScrolling={scrollHeight} />
                <OuterLayout>
                    <InnerLayout>
                        <HeroWrapper>
                            <LeftArea>
                                <h1>
                                    Experience your ultimate mobile application
                                </h1>
                                <p>
                                    Get your blood tests delivered at home.
                                    collect all samples from the victory of the
                                    managements that supplies best design system
                                    guidelines ever.
                                </p>
                                <div className="buttonGroup">
                                    <div
                                        className="button-started"
                                        aria-label="Get Started"
                                    >
                                        Get Started
                                    </div>
                                    <div
                                        onClick={() =>
                                            setModalActive(!modalActive)
                                        }
                                        className="button-video"
                                        aria-label="Watch Video"
                                    >
                                        <span>
                                            <img src={watchvideo} alt="" />
                                        </span>
                                        Watch Video
                                    </div>
                                </div>
                                <div className="sponsor">
                                    <div className="text">Sponsored by :</div>
                                    <div className="tech">
                                        <a
                                            href="https://www.paypal.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={paypal} alt="" />
                                        </a>
                                        <a
                                            href="https://www.google.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={google} alt="" />
                                        </a>
                                        <a
                                            href="https://www.dropbox.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={dropbox} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </LeftArea>
                            <RightArea>
                                <div className="wrapper">
                                    <img src={bannerThumb} alt="a smartphone" />
                                </div>
                            </RightArea>
                        </HeroWrapper>
                    </InnerLayout>
                </OuterLayout>
            </HeaderStyled>
            {modalActive && <Modal closeModal={modalClickHandler}/>}
        </React.Fragment>
    );
}


const HeaderStyled = styled.header`
    width: 100%;
    background-image: url(${bannerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    background-color: var(--primary-color);
    overflow: hidden;
    border-bottom-right-radius: 6rem;
    @media screen and (min-width: 480px) {
        border-bottom-right-radius: 9rem;
    }
    @media screen and (min-width: 1220px) {
        border-bottom-right-radius: 250px;
    }
`;

const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    @media screen and (min-width: 900px) {
        margin: 5rem 0;
    }
    @media screen and (min-width: 1900px) {
        margin: 5rem 0;
    }
`;


const LeftArea = styled.div`
    color: white;
    h1 {
        line-height: 1.2;
        margin-bottom: 1.5rem;
        @media (min-width: 375px) {
            font-size: 2.5rem;
        }
        @media (min-width: 500px) {
            font-size: 3.2rem;
        }
        @media (min-width: 768px) {
            font-size: 3rem;
        }
        @media screen and (min-width: 1300px) {
            font-size: 4rem;
            max-width: 1000px;
        }
        @media screen and (min-width: 1600px) {
            font-size: 4.8rem;
            max-width: 1000px;
        }
    }
    p {
        line-height: 2;
        letter-spacing: 1.1;
        font-size: 1rem;
        margin-bottom: 2rem;
        @media (min-width: 768px) {
            max-width: 400px;
        }
        @media screen and (min-width: 1300px) {
            font-size: 1.1rem;
            max-width: 500px;
        }
        @media screen and (min-width: 1600px) {
            font-size: 1.25rem;
            max-width: 600px;
        }
    }
    .buttonGroup {
        display: flex;
        align-items: center;
        .button-started {
            font-family: 'DM Sans', sans-serif;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            color: var(--primary-color);
            background: white;
            outline: none;
            border: 1.5px solid white;
            cursor: pointer;
            font-size: 0.875rem;
            display: inline-block;
            transition: all 0.25s;
            font-weight: 500;
            &:hover {
                box-shadow: rgb(0 0 0 / 50%) 0px 12px 24px -10px;
            }
            @media screen and (min-width: 1600px) {
                padding: 0.8rem 1.8rem;
                font-size: 1rem;
            }
        }
        .button-video {
            display: flex;
            align-items: center;
            padding: 11px 20px 10px;
            font-family: 'DM Sans', sans-serif;
            cursor: pointer;
            line-height: 1.2;
            -webkit-transition: all 0.25s;
            transition: all 0.25s;
            font-weight: 500;
            background-color: transparent;
            color: white;
            font-size: 0.875rem;
            @media screen and (min-width: 1600px) {
                padding: 0.8rem 1.8rem;
                font-size: 1rem;
            }
            span {
                display: inline-block;
                margin-right: 0.6rem;
            }
        }
    }
    .sponsor {
        display: flex;
        flex-direction: column;
        padding-top: 2.2rem;
        @media (min-width: 768px) {
            flex-direction: row;
        }
        .text {
            padding-bottom: 0.625rem;
            opacity: 0.6;
            @media (min-width: 768px) {
                width: 30%;
            }
            @media (min-width: 1900px) {
                width: 20%;
            }
        }
        .tech {
            display: flex;
            align-items: center;
            a {
                margin-right: 1.6rem;
                img {
                    width: 5rem;
                    height: auto;
                    @media (min-width: 768px) {
                        width: 4rem;
                    }
                    @media (min-width: 1600px) {
                        width: 5rem;
                    }
                }
            }
        }
    }
`;



const RightArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1300px) {
        width: 40%;
    }
    .wrapper {
        height: 100%;
        width: 100%;
        img {
            display: none;
            margin: 0 auto;
            /* min-width: 0; */
            /* max-width: 100%; */
            height: auto;
            @media (min-width: 768px) {
                display: block;
                width: 350px;
                height: 400px;
                margin-left: -5px;
            }
            @media screen and (min-width: 1024px) {
                width: 500px;
                margin-left: -100px;
            }
            @media screen and (min-width: 900px) {
                width: 400px;
                width: 300%;
                margin-left: -200px;
            }
            @media screen and (min-width: 1300px) {
                width: 800px;
                height: 100%;
                margin-left: -200px;
            }
            @media screen and (min-width: 1920px) {
                margin-left: -200px;
                height: 110%;
                width: 900px;
            }
        }
    }
`;