import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import Table from "../../components/table"
import ScoreInput from "../../components/score-input"

import Row from "../../components/row"
import Cell from "../../components/cell"

const tableTitles = [
    {
        title: "Nome do time",
        dataIndex: "name",
    },
    {
        title: "Jogador 1",
        dataIndex: "player1",
    },
    {
        title: "Jogador 2",
        dataIndex: "player2"
    },
    {
        title: "Pontos",
        dataIndex: "score"
    }
]

const TableTeams = ({
    showScore,
    tableTeams,
    children,
    onNewRow,
    buttonText,
    onChangeScore,
    max
}) => {

    const teams = useSelector((state) => state.teams)
    const [teamsListSorted, setTeamsListSorted] = useState([])

    useEffect(() => {
        if (tableTeams) {
            let filtered = teams.filter((currTeam) =>
                tableTeams.find((currTableTeam) => currTeam.id === currTableTeam.id))
            
            filtered.sort((currItem, nextItem) => {
                let teamA = tableTeams.find((currTableTeam) => currTableTeam.id === nextItem.id).score
                let teamB = tableTeams.find((currTableTeam) => currTableTeam.id === currItem.id).score

                return teamA - teamB
            })

            setTeamsListSorted(filtered)
        } else {
            setTeamsListSorted(teams)
        }
    }, [tableTeams, teams])

    const handleInputScoreChange = (value, team) =>
        onChangeScore(value, team.id)
    
    return (
        <Table buttonText={buttonText} onNewRow={onNewRow}>
            <Row.Title>
                {tableTitles
                    .filter((currTitle) => showScore || currTitle.dataIndex !== "score")
                    .map((currTitle, index) =>
                        <Cell key={index}>{currTitle.title}</Cell>)}
            </Row.Title>

            {teamsListSorted
                .map((currItem, itemIndex) => (
                    <Row key={itemIndex}>
                        {tableTitles.map((currTitle, index) => 
                                currTitle.dataIndex !== "score" ?
                                (<Cell key={index}>{currItem[currTitle.dataIndex]}</Cell>) :
                                showScore &&
                                (<Cell key={index}>
                                    <ScoreInput
                                    onInputScoreChange={handleInputScoreChange}
                                    currItem={currItem}
                                    tableTeams={tableTeams}
                                    max={max}
                                    />
                                </Cell>)
                        )}
                    </Row>
                ))}
            {children}
        </Table>
    )
}

export default TableTeams