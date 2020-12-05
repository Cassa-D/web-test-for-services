import styled from "styled-components"

export const StyledTable = styled.div`

    display: flex;
    background-color: #ddd;

    border-radius: 5px;

    margin: 5px;

    flex-direction: column;
    font-size: 1.25rem;

    overflow-x: scroll;

    ::-webkit-scrollbar {
        background: #ddd;

        width:12px;

        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 5px;
    }
`

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

export const StyledCell = styled.div`
    display: inline-block;
    padding: 5px 15px;

    background-color: #ccc;

    min-width: 196px;

    width: calc(33% - 30px);
`

export const StyledAddCell = styled.button`
    background-color: #aaa;
    padding: 5px 25px;

    margin: 0 10px;
    min-width: 678px;

    border-style: none;

    font-size: 1em;

    border-radius: 0 0 5px 5px;

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