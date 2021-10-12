import styled from 'styled-components';

interface buttonProps {
    text: string;
}

const WhiteButton = ({ text }: buttonProps) => {
    return <ButtonStyled>{text}</ButtonStyled>;
};

export default WhiteButton;

const ButtonStyled = styled.div`
    font-family: 'DM Sans', sans-serif;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    color: var(--primary-color);
    background: white;
    outline: none;
    border: 1.5px solid white;
    cursor: pointer !important;
    font-size: 0.88rem;
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
`;
