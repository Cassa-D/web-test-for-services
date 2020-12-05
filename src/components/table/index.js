import { BsPlusCircle } from "react-icons/bs"

import { StyledAddCell, StyledCell, StyledRow, StyledRowTitle, StyledTable } from "./styled"

const Table = ({ list, titles, onNewRow, buttonText }) => {
    return (
        <StyledTable>
            <StyledRowTitle>
                {titles.map((currTitle, index) => (
                    <StyledCell key={index}>{currTitle.title}</StyledCell>
                ))}
            </StyledRowTitle>
            {list && list.map((currItem, index) => (
                <StyledRow key={index}>
                    {titles.map((_, index) => (
                        <StyledCell key={index}>
                            {currItem[titles[index].dataIndex]}
                        </StyledCell>
                    ))}
                </StyledRow>
            ))}
            <StyledAddCell onClick={onNewRow}>
                <span className="icon">
                    <BsPlusCircle />
                </span>
                <div className="description">
                    {buttonText}
                </div>
            </StyledAddCell>
        </StyledTable>
    )
}


export default Table