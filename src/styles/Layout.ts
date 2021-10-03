import styled from 'styled-components'

export const InnerLayout = styled.div`
    padding: 4rem 0rem;
    @media screen and (min-width: 1280px) {
        /* padding: 8rem 0; */
    }
`;


export const OuterLayout = styled.div`
    padding: 0 1rem;
    @media  (min-width: 768px) {
        padding: 0 2rem;
    }
    @media  (min-width: 1200px) {
        padding: 0 8rem;
    }
`;