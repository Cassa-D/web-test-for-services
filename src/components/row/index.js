import styled from "styled-components"

const Row = ({ handleRowClick, children }) => {
    return <StyledRow onClick={handleRowClick}>{children}</StyledRow>
}

Row.Title = ({ children }) => {
    return <StyledRowTitle>{children}</StyledRowTitle>
}

export default Row

export const StyledRow = styled.div`
    display: flex;

    box-sizing: border-box;

    flex-flow: nowrap row;

    margin: 0 10px;
    min-width: 678px;

    justify-content: space-between;
`

export const StyledRowTitle = styled(StyledRow)`
    background-color: #aaa;
    text-align: center;

    border-radius: 5px 5px 0 0;

    margin-top: 10px;

    > div {
        background-color: #aaa;
    }
`