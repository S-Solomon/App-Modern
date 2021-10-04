import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io';

interface Props {
    // closeModal:  () => void;
    closeModal: any;
}

const Modal = ( {closeModal}:Props) => {
    return (
        <ModalStyled
            aria-label="modal opened"
            role="dialog"
            onClick={closeModal}
        >
            <div className="body">
                <div className="inner">
                    <div className="video-wrapper">
                        <IoMdClose data-testid="modal-close-button">
                            className="close-modal"
                            aria-label="close modal by clicking this button"
                            onClick={closeModal}
                        </IoMdClose>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/L3LMbpZIKhQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </ModalStyled>
    );
}

export default Modal


const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-out;
    .body {
        max-width: 940px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        .inner {
            width: 100%;
            height: 100%;
        }
        .video-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            /* background-color: #333; */
            height: 100%;
            width: 100%;
            /* margin: 100px; */
            /* margin: 0 auto; */
            svg {
                position: absolute;
                top: 31%;
                right: 8.5%;
                color: white;
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;