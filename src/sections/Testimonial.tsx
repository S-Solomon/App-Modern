import styled from 'styled-components'
import TestimonialData from '../data/TestimonialData'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import { AiFillStar } from 'react-icons/ai'


import Slider from 'react-slick'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centrePadding: "60px",
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                    slidestoScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidestoScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ],
    };



    return (
        <TestimonialStyled>
            <InnerLayout>
                <OuterLayout>
                    <Heading>
                        <p className="subtitle">Testimonial</p>
                        <h2 className="primary-title">
                            Meet Client Satisfaction
                        </h2>
                    </Heading>
                    <Content>
                        <Slider {...settings} className="slider">
                            {
                                TestimonialData.map((item) => (
                                    <div className="slider-container" key={item.id}>
                                        <div className="ratings">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="para">{item.text}</div>
                                        <div className="footer">
                                            <div className="image">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="info">
                                                <h4>{item.name}</h4>
                                                <div className="handle">{item.handle}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </Content>
                </OuterLayout>
            </InnerLayout>
        </TestimonialStyled>
    );
}

export default Testimonial

const TestimonialStyled = styled.section`
    z-index: -1;
`

const Heading = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`


const Content = styled.div`
    .slider {
        z-index: -1;
        width: 550px;
        width: 60vw;
        margin: 0 auto;
        position: relative;
        /* display: flex; */
        /* justify-content: space-evenly; */
        /* align-items: center; */
        /* margin: 0 auto; */
        .slick-arrow.slick-prev,
        .slick-arrow.slick-next {
            display: none;
            /* background-color: red; */
            /* pointer-events: none; */
            /* cursor: pointer; */
        }
        .slider-container {
            /* margin: 0 auto; */
            margin: 0 -27px;
            transition: all 0.3s ease 0s;
            border-radius: 6px;
            box-shadow: rgb(38 78 118 / 35%) 0px 0px 1px;
            padding: 3rem 2rem 3rem 2rem;
            cursor: grab;
            &:hover {
                box-shadow: rgb(38 78 118 / 10%) 0px 6px 47px;
            }
            .ratings {
                padding: 1rem 0;
                svg {
                    color: var(--yellow-color);
                }
            }
            h3 {
            }
            .para {
                /* width: 200px; */
                /* height: 300px; */
                margin: 2rem 0;
            }
            .footer {
                display: flex;
                .image {
                    margin-right: 1.5rem;
                }
                .info {
                    .handle {
                        color: rgb(37, 160, 225);
                        padding-top: 0.3rem;
                    }
                }
            }
        }
    }
`;
