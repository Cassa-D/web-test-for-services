import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import Table from "../../components/table"
import { modifyScoreFromTeam } from "../../redux/modules/tables/actions"


const tableTitles = [
    {
        title: "Nome do time",
        dataIndex: "teamName",
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

const TableTeams = ({ showScore = false, tableTeams, tableIndex }) => {
    const teamsList = useSelector((store) => store.teams)
    const [teamsListSorted, setTeamsListSorted] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (tableTeams) {
            let sorted = [...teamsList].sort((currItem, nextItem) => tableTeams.find((currTableTeam) => currTableTeam.teamName === nextItem.teamName).points - tableTeams.find((currTableTeam) => currTableTeam.teamName === currItem.teamName).points)

            setTeamsListSorted(sorted)
        } else {
            setTeamsListSorted(teamsList)
        }
    }, [teamsList, tableTeams])

    return (
        <Table
            list={teamsListSorted}
            titles={tableTitles.filter((currTitle) => showScore || currTitle.dataIndex !== "score")}
            buttonText="Criar novo time"
            tableTeams={tableTeams}
            onInputScoreChange={(value, team) => {
                let modifyTeamIndex = teamsList.findIndex((currTeam) => JSON.stringify(currTeam) === JSON.stringify(team))
                dispatch(modifyScoreFromTeam(Number(value), modifyTeamIndex, tableIndex))
            }}
        />
    )
}

export default TableTeams