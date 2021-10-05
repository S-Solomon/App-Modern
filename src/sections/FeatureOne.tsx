import React from 'react'
import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import FeatureOneData from '../data/FeatureOneData'

const FeatureOne = () => {
    return (
        <React.Fragment>
            <OuterLayout>
                <InnerLayout>
                    <FeatureOneStyled>
                        <div className="container">
                            <div className="topic">
                                <p className="subtitle">Quality features</p>
                                <h2 className="primary-title">
                                    Meet exciting feature of app
                                </h2>
                            </div>
                            <div className="items-wrapper">
                                {FeatureOneData.map((data) => (
                                    <div className="items" key={data.id}>
                                        <div className="image-container">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <div className="text-container">
                                            <h2 className="secondary-title">
                                                {data.title}
                                            </h2>
                                            <div className="paragraph-container">
                                                <p className="para">{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FeatureOneStyled>
                </InnerLayout>
            </OuterLayout>
        </React.Fragment>
    );
}

export default FeatureOne


const FeatureOneStyled = styled.section``