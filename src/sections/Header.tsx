import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { OuterLayout } from "../styles/Layout"
import bannerBg from '../assets/bannerBg.png'
import Navbar from "../components/navbar/Navbar"


export default function Header() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollHeight(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [scrollHeight])

    return (
        <HeaderStyled>
            <Navbar isScrolling={scrollHeight}/>
            <OuterLayout>
            </OuterLayout>
        </HeaderStyled>
    )
}


const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bannerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    background-color: var(--primary-color);
    overflow: hidden;
`;
