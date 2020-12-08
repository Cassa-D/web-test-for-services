import { StyledDropdown } from "./styled"

const Dropdown = ({ show, children, title }) => {
    return (
        <StyledDropdown show={show}>
            <div className="dropdown">
                <div className="dropbtn">{title}</div>
                <div className="dropdown-content">
                    {children}
                </div>
            </div> 
        </StyledDropdown>
    )
}

export default Dropdown