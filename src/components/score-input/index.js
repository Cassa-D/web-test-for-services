import { useState } from "react"

const ScoreInput = ({ onInputScoreChange, currItem, tableTeams }) => {
    const getInitialValue = () => {
        if (tableTeams.length > 0) {
            return tableTeams.find((currTeam) => currTeam.teamName === currItem.teamName).points
        }
        
        return 0
    }

    const [value] = useState(getInitialValue())

    return (
        <input min={0} type="number" onChange={({ target: { value } }) => { onInputScoreChange(value, currItem) }} defaultValue={value} />
    )
}

export default ScoreInput