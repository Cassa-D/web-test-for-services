import { BsPlusCircle } from "react-icons/bs"
import { useHistory } from "react-router-dom"

import { StyledAddCell, StyledCell, StyledRow, StyledRowTitle, StyledTable } from "./styled"
import ScoreInput from "../score-input"

const Table = ({
    list,
    titles,
    onNewRow,
    buttonText,
    goToPage,
    tableTeams,
    onInputScoreChange
}) => {
    const history = useHistory()

    return (
        <StyledTable>
            <div>
                <StyledRowTitle>
                    {titles.map((currTitle, index) => (
                        <StyledCell key={index}>{currTitle.title}</StyledCell>
                        ))}
                </StyledRowTitle>
                {list && list
                    .map((currItem, itemIndex) => (
                        <StyledRow key={itemIndex} onClick={() => !goToPage || history.push(`${goToPage}/${itemIndex + 1}`)}>
                            {titles.map((currTitle, index) => (
                                <StyledCell key={index} len={titles.length}>
                                    {!(currTitle.dataIndex === "score") ? currItem[currTitle.dataIndex] : 
                                    <ScoreInput onInputScoreChange={onInputScoreChange} currItem={currItem} tableTeams={tableTeams} />}
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
            </div>
        </StyledTable>
    )
}


export default Table