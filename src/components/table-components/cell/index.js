import styled from "styled-components"

const Cell = ({ children }) => {
    return <StyledCell>{children}</StyledCell>
}

export default Cell

export const StyledCell = styled.div`
    display: inline-block;
    padding: 5px 15px;

    background-color: #ccc;

    min-width: 139px;

    width: calc(33% - 30px);
`