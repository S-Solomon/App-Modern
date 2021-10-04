import React from 'react'
import styled from 'styled-components'

const Modal = () => {
    return (
        <ModalStyled aria-label="modal opened" role="dialog">
            <div className="body">
                <div className="inner">
                    <div className="video-wrapper">
                        <button className="close-modal"></button>
                        <iframe
                            title="youtube video"
                            width="460"
                            height="230"
                            src="//www.youtube.com/embed/ZNA9rmDsYVE?autoplay=1&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            // allowFullscreen=""
                            // tabindex="-1"
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
        display: table;
        .inner {
            display: table-cell;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }
        .video-wrapper {
            position: relative;
            margin: 30px;
            width: auto;
        }
    }
`;