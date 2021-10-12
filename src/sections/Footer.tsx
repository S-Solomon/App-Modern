import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import FooterData from '../data/FooterData';


const Footer = () => {
    return (
        <FooterStyled>
            <InnerLayout style={{ borderTop: '1px solid #E5ECF4' }}>
                <OuterLayout>
                    <Wrapper>
                        <div className="content">
                            {FooterData.map((footer) => (
                                <div className="item">
                                    <h2>{footer.title}</h2>
                                    <nav>
                                        <a href="/">{footer.link1}</a>
                                        <a href="/">{footer.link2}</a>
                                        <a href="/">{footer.link3}</a>
                                        <a href="/">{footer.link4}</a>
                                        <a href="/">{footer.link5}</a>
                                    </nav>
                                </div>
                            ))}
                        </div>
                        <div className="attribution">
                            All right reserved - Design & Developed byRedQ, Inc
                        </div>
                    </Wrapper>
                </OuterLayout>
            </InnerLayout>
        </FooterStyled>
    );
}

export default Footer


const FooterStyled = styled.footer``

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .content {
        display: flex;
        margin-bottom: 5rem;
        flex-wrap: wrap;
        .item {
            display: flex;
            flex-direction: column;
            min-width: 0;
            width: 50%;
            margin-bottom: 40px;
            @media screen and (min-width: 768px) {
                width: 25%;
            }
            h2 {
                margin-bottom: 15px;
                line-height: 1.35;
                font-weight: 500;
                font-size: 18px;
                letter-spacing: -0.5px;
                color: var(--text-secondary);
                font-family: 'DM Sans', sans-serif;
                @media screen and (min-width: 768px) {
                    font-size: 20px;
                }
            }
            nav {
                a {
                    box-sizing: border-box;
                    margin: 0;
                    min-width: 0;
                    font-size: 14px;
                    color: var(--text-color);
                    font-weight: normal;
                    margin-bottom: 10px;
                    cursor: pointer;
                    -webkit-transition: all 0.35s;
                    transition: all 0.35s;
                    display: block;
                    -webkit-text-decoration: none;
                    text-decoration: none;
                    line-height: 1.5;
                    @media screen and (min-width: 640px) {
                        font-size: 15px;
                    }
                }
            }
        }
    }
    .attribution {
        text-align: center;
        color: var(--text-color);
        font-size: 0.9rem;
        margin-bottom: -3rem;
    }
`;
