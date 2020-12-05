import styled from "styled-components"

const Modal = ({ children, show }) => {
    return (
        <StyledModal show={show}>
            <div className="container">
                {children}
            </div>
        </StyledModal>
    )
}

export default Modal

const StyledModal = styled.div`
    display: ${({ show }) => (show ? "grid" : "none")};
    place-items: center;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    z-index: 1000;

    .container {
        border-radius: 5px;
        padding: 50px;
        background-color: white;

        margin: 25px;

        min-width: 210px;

        max-height: 80%;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            background: #fff;

            width:12px;

            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 5px;
        }
    }
`