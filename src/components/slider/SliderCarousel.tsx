import React from 'react'
import styled from 'styled-components'
import TestimonialData from '../../data/TestimonialData'
import { AiFillStar } from 'react-icons/ai'
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay:true,
                    dots: false,
                },
            },
            {
                breakpoint: 1620,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay:true,
                    dots: false,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay:true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                },
            }
        ],
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                {TestimonialData.map((item) => (
                    <div className="slider" key={item.id}>
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
                ))}
            </Slider>
        </SliderContainer>
    );
}

export default SliderCarousel

const SliderContainer = styled.div`
    z-index: -1;
    width: 550px;
    width: 60vw;
    margin: 0 auto;
    position: relative;
    .slider {
        margin: 0 -27px;
        transition: all 0.3s ease 0s;
        border-radius: 6px;
        box-shadow: rgb(38 78 118 / 35%) 0px 0px 1px;
        padding: 3rem 2rem 3rem 2rem;
        cursor: grab !important;
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
`;
