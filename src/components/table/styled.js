import styled from "styled-components"

export const StyledTable = styled.div`
    display: flex;

    background-color: #ddd;

    border-radius: 5px;

    margin: 5px;
    padding: 10px;

    flex-direction: column;
    font-size: 1.25rem;

    min-width: 330px;

    @media (max-width: 440px) {
        font-size: 1rem;
    }
`

export const StyledRow = styled.div`
    display: flex;

    width: 100%;

    flex-flow: nowrap row;

    justify-content: space-between;
`

export const StyledRowTitle = styled(StyledRow)`
    background-color: #aaa;
    text-align: center;

`

export const StyledCell = styled.div`
    display: inline-block;
    padding: 5px 15px;

    width: calc(33% - 30px);
`

export const StyledAddCell = styled.button`
    background-color: #aaa;
    padding: 5px 25px;

    border-style: none;

    font-size: 1em;

    cursor: pointer;

    :focus{
        outline: none;
    }

    :hover {
        background-color: #999;
    }

    .icon {
        font-size: 25px;
        float: left;
    }

    .description {
        display: inline-block;

        margin: 0 20px;
    }
`