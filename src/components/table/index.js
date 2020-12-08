import { BsPlusCircle } from "react-icons/bs"

import { StyledAddCell, StyledTable } from "./styled"

const Table = ({ onNewRow, buttonText, children }) => {
    return (
        <StyledTable>
            <div>
                {children}
                <StyledAddCell onClick={onNewRow}>
                    <span className="icon">
                        <BsPlusCircle />
                    </span>
                    <div className="description">
                        {buttonText}
                    </div>
                </StyledAddCell>
            </div>
        </StyledTable>
    )
}


export default Table