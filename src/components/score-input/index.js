import { useState } from "react"

const ScoreInput = ({ onInputScoreChange, currItem, tableTeams }) => {
    const [value, setValue] = useState(tableTeams.find((currTeam) => currTeam.teamName === currItem.teamName).points)

    return (
        <input min={0} type="number" onChange={({ target: { value } }) => { onInputScoreChange(value, currItem); setValue(value) }} value={value}/>
    )
}

export default ScoreInput