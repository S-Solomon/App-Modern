import styled from "styled-components"
import Accordion from "../components/accordion/Accordion"
import { InnerLayout, OuterLayout } from "../styles/Layout"

const FAQ = () => {
    return (
        <FAQStyled>
            <InnerLayout>
                <OuterLayout>
                    <Accordion />
                </OuterLayout>
            </InnerLayout>
        </FAQStyled>
    )
}

export default FAQ


const FAQStyled = styled.section``