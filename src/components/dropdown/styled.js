import styled from "styled-components"

export const StyledDropdown = styled.div`
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    
    .chose {
        float: left;
        font-size: 16px;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    .dropdown {
        float: left;
        overflow: hidden;
    }
    
    .dropdown .dropbtn {
        cursor: pointer;
        border: none;
        outline: none;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }
    
    .dropdown-content {
        display: ${props => props.show ? "" : "none"};
        left: 25px;
        position: absolute;
        background-color: #f9f9f9;
        width: calc(100% - 50px);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    
    .dropdown-content .chose {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }
    
    .dropdown-content .chose:hover {
        background-color: #ddd;
    }
`