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

export const StyledAddCell = styled.button`
    background-color: #aaa;
    padding: 5px 25px;

    margin: 0 10px;
    min-width: 678px;

    width: calc(100% - 20px);

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

        margin: 4px 20px;
    }
`