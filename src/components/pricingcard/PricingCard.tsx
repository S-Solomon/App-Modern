import styled from "styled-components"
import PricingCardData from "../../data/PricingCardData"
import WhiteButton from '../button/WhiteButton'
import BlueButton from '../button/BlueButton'

interface pricingProps  {
    planName: string;
    planFor: string;
    whiteButton?: boolean;
    blueButton?: boolean;
    mutedElements?: boolean;
    whiteBackground?: boolean;
    blueBackround?: boolean;
    premium?: boolean;
}

const PricingCard = ({
    planName,
    planFor,
    whiteButton,
    blueButton,
    mutedElements,
    whiteBackground,
    blueBackround,
    premium
}: pricingProps) => {
    return (
        <PricingCardStyled>
            {PricingCardData.map((pricing) => (
                <div
                    className={
                        whiteBackground
                            ? 'card whiteBackground'
                            : 'card blueBackground'
                    }
                    key={pricing.id}
                >
                    {whiteBackground && (
                        <div className="recommended"> Recommended</div>
                    )}
                    <div className="card-content">
                        <div className="title-wrapper">
                            <div className="title">
                                <h2>{planName}</h2>
                                <p>{planFor}</p>
                            </div>
                            {premium && (
                                <div className="premium">
                                    <p className="para">Starting from</p>
                                    <p className="price">$29.99/mo</p>
                                </div>
                            )}
                        </div>
                        <ul>
                            <li>
                                <div className="inner">
                                    <img src={pricing.img1} alt="" />
                                    <p className="para">{pricing.p1}</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img src={pricing.img1} alt="" />
                                    <p className="para">{pricing.p2}</p>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <img src={pricing.img1} alt="" />
                                    <p className="para">{pricing.p3}</p>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={
                                        mutedElements ? 'inner muted' : 'inner'
                                    }
                                >
                                    <img
                                        src={
                                            mutedElements
                                                ? `${pricing.img2}`
                                                : `${pricing.img1}`
                                        }
                                        alt=""
                                    />
                                    <p className="para">{pricing.p4}</p>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={
                                        mutedElements ? 'inner muted' : 'inner'
                                    }
                                >
                                    <img
                                        src={
                                            mutedElements
                                                ? `${pricing.img2}`
                                                : `${pricing.img1}`
                                        }
                                        alt=""
                                    />
                                    <p className="para">{pricing.p5}</p>
                                </div>
                            </li>
                        </ul>
                        <div className="button">
                            {whiteButton ? (
                                <WhiteButton text="SignUp Now" />
                            ) : null}
                            {blueButton ? (
                                <BlueButton text="SignUp Now" />
                            ) : null}
                        </div>
                    </div>
                </div>
            ))}
        </PricingCardStyled>
    );
};

export default PricingCard


const PricingCardStyled = styled.div<Pick<pricingProps, 'whiteBackground' >>`
    // didn't know you can choose specific props like the above  😲
    // Pick<pricingProps, 'whiteBackground' | 'blueBackround'>
    // but it doesn't work, hopefully can solve this problem later

    .card {
        position: relative;
        width: 250px;
        border-radius: 4px;
        /* background: ${props => props.whiteBackground ? '#fff' : '#2F5392'}; */
        @media screen and (min-width: 300px) {
            width: 300px;
        }
        @media screen and (min-width: 500px) {
            width: 350px;
        }
        @media screen and (min-width: 1000px) {
            width: 400px;
            margin: 0 auto;
        }
        @media screen and (min-width: 1300px) {
            width: 500px;
            margin: 0 auto;
        }
        .card-content {
            padding: 2rem 1rem;
            @media screen and (min-width: 500px) {
                padding: 5rem 2rem 2rem;
            }
            @media screen and (min-width: 900px) {}
            .title-wrapper {
                color: white;
                margin-bottom: 3rem;
                display: flex;
                justify-content: space-between;
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            }
            ul {
                list-style: none;
                li {
                    padding-bottom: 1.5rem;
                    .inner {
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        img {
                            margin-right: 1.5rem;
                            padding-top: 0.5rem;
                        }
                        p {
                            /* color: white; */
                        }
                    }
                }
            }
            .button {
                display: grid;
                place-content: center;
                cursor: pointer;
                padding: 1rem 0;
            }
        }
    }
`;