import { StyledDropdown } from "./styled"

const Dropdown = ({ show, children }) => {
    return (
        <StyledDropdown show={show}>
            <div class="dropdown">
                <div class="dropbtn">Dropdown</div>
                <div class="dropdown-content">
                    {children}
                </div>
            </div> 
        </StyledDropdown>
    )
}

export default Dropdown