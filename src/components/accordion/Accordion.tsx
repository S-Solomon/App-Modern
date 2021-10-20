import React, { useState } from 'react';
import styled from 'styled-components';
import accordionData from '../../data/accordionData';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i: any) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <Wrapper>
            <Heading>
                <p className="subtitle">GET YOUR QUESTION ANSWER</p>
                <h2 className="primary-title">Frequently asked question</h2>
            </Heading>
            <div className="accordion">
                {accordionData.map((item, i) => (
                    <div className="item" key={i}>
                        <div className="title" onClick={() => toggle(i)}>
                            <span
                                className={
                                    selected === i ? 'span active' : 'span'
                                }
                            ></span>
                            <h2>{item.question}</h2>
                        </div>
                        <div
                            className={
                                selected === i ? 'content show' : 'content'
                            }
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default Accordion;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
    .accordion {
        position: relative;
        width: 250px;
        @media screen and (min-width: 300px) {
            width: 290px;
        }
        @media screen and (min-width: 400px) {
            width: 310px;
        }
        @media screen and (min-width: 700px) {
            width: 600px;
        }
        @media screen and (min-width: 1000px) {
            width: 800px;
        }
        .item {
            background: white;
            padding: 10px 20px;
            &:not(:last-child) {
                border-bottom: 1px solid #e5ecf4;
            }
            .title {
                display: flex;
                h2 {
                    font-weight: 500;
                    color: var(--heading-color);
                    cursor: pointer;
                    font-size: 1rem;
                    font-family: 'DM Sans', sans-serif;
                    @media screen and (min-width: 640px) {
                        font-size: 1.1rem;
                    }
                    @media screen and (min-width: 990px) {
                        font-size: 1.3rem;
                    }
                }
                .span {
                    margin-right: 1rem;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #25cb9e;
                    cursor: pointer;
                    position: relative;
                    &::before {
                        position: absolute;
                        content: '';
                        height: 2px;
                        width: 10px;
                        background-color: white;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    &::after {
                        position: absolute;
                        content: '';
                        height: 10px;
                        width: 2px;
                        background-color: white;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        -ms-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                        -webkit-transition: all 0.25s;
                        transition: all 0.25s;
                    }
                }
                .span.active::before {
                    position: absolute;
                    content: '';
                    height: 2px;
                    width: 10px;
                    background-color: white;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .span.active::after {
                    opacity: 0;
                }
            }
            .content {
                color: var(--text-color);
                max-height: 0;
                overflow: hidden;
                transition: all 0.5s cubic-bezier(0, 1, 0, 1);
                padding-top: 1rem;
                line-height: 1.85;
                letter-spacing: .5px;
                font-size: 1rem;
                margin-left: 2.4rem;
                font-family: 'DM Sans', sans-serif;
                font-weight: 400;
            }
            .content.show {
                height: auto;
                max-height: 9999px;
                transition: all 0.5s cubic-bezier(1, 0, 1, 0);
                font-family: 'DM Sans', sans-serif;
            }
        }
    }
`;

const Heading = styled.div`
    margin-bottom: 4rem;
    text-align: center;
`