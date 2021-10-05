import styled from 'styled-components'

export const InnerLayout = styled.div`
    padding: 4rem 0rem;
    @media screen and (min-width: 640px) {
        padding: 6rem 0;
    }
    @media screen and (min-width: 1220px) {
        padding: 7.5rem 0;
    }
`;


export const OuterLayout = styled.div`
    padding: 0 1rem;
    @media (min-width: 768px) {
        padding: 0 2rem;
    }
    @media screen and (min-width: 900px) {
        padding: 0 8rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 0 4rem;
    }
    @media screen and (min-width: 1300px) {
        padding: 0 8rem;
    }
    @media screen and(min-width: 1440px) {
        padding: 0 12rem;
    }
    @media screen and (min-width: 1900px) {
        padding: 0 18rem;
    }
    @media screen and(min-width: 2100px) {
        padding: 0 20rem;
    }
`;