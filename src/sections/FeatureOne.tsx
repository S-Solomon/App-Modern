import React from 'react'
import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'

const FeatureOne = () => {
    return (
        <React.Fragment>
            <OuterLayout>
                <InnerLayout>
                    <FeatureOneStyled>

                    </FeatureOneStyled>
                </InnerLayout>
            </OuterLayout>
        </React.Fragment>
    )
}

export default FeatureOne


const FeatureOneStyled = styled.div``