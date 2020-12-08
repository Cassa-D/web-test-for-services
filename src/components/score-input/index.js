import { useEffect, useState } from "react"

const ScoreInput = ({ onInputScoreChange, currItem, tableTeams = [], max }) => {
    const [inputValue, setInputValue] = useState(0)
    
    const onChange = ({ target: { innerText: operation } }) => {
        if ((inputValue <= 0 && operation === "-") || inputValue >= max)
            return

        let newValue = inputValue

        if (operation === "+") newValue++
        else newValue--

        setInputValue(newValue)
        onInputScoreChange(newValue, currItem)
    }

    useEffect(() => {
        setInputValue(tableTeams
            .find((currTeam) => currTeam.id === currItem.id).score)
    }, [currItem.id, tableTeams])
    
    return (
        <div>
            {inputValue}
            <button onClick={onChange}>+</button>
            <button onClick={onChange}>-</button>
        </div>
    )
}

export default ScoreInput