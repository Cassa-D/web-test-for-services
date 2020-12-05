import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import FormCreate from "../../components/form-create"
import Table from "../../components/table"

import { modifyScoreFromTeam } from "../../redux/modules/tables/actions"
import { createNewTeam } from "../../redux/modules/teams/actions"


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
    const dispatch = useDispatch()

    const teamsList = useSelector((store) => store.teams)
    const [teamsListSorted, setTeamsListSorted] = useState([])

    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})

    const inputs = [
        {
            type: "text",
            name: "teamName",
            placeholder: "Nome do time",
            validate: (value) => {
                setData({ ...data, teamName: value })
                if (!value) return "Por favor informe um nome para o novo time!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 5)"
            }
        },
        {
            type: "text",
            name: "player1",
            placeholder: "Nome do jogador 1",
            validate: (value) => {
                setData({ ...data, player1: value })
                if (!value) return "Por favor informe o nome do primeiro jogador!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 3)"
            }
        },
        {
            type: "text",
            name: "player2",
            placeholder: "Nome do jogador 2",
            validate: (value) => {
                setData({ ...data, player2: value })
                if (!value) return "Por favor informe o nome do segundo jogador!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 3)"
            }
        }
    ]

    useEffect(() => {
        if (tableTeams) {
            let sorted = [...teamsList].sort((currItem, nextItem) => tableTeams.find((currTableTeam) => currTableTeam.teamName === nextItem.teamName).points - tableTeams.find((currTableTeam) => currTableTeam.teamName === currItem.teamName).points)

            setTeamsListSorted(sorted)
        } else {
            setTeamsListSorted(teamsList)
        }
    }, [teamsList, tableTeams])

    const onSubmit = (values) => {
        dispatch(createNewTeam(values))
        setData({})
        setShowModal(false)
    }

    return (
        <>
            <Table
                list={teamsListSorted}
                titles={tableTitles.filter((currTitle) => showScore || currTitle.dataIndex !== "score")}
                buttonText="Criar novo time"
                onNewRow={() => setShowModal(true)}
                tableTeams={tableTeams}
                onInputScoreChange={(value, team) => {
                    let modifyTeamIndex = teamsList.findIndex((currTeam) => JSON.stringify(currTeam) === JSON.stringify(team))
                    dispatch(modifyScoreFromTeam(Number(value), modifyTeamIndex, tableIndex))
                }}
                />
            <FormCreate
                inputs={inputs}
                data={{ data, setData }}
                onSubmit={onSubmit}
                show={{ showModal, setShowModal }}
                title="Criar um novo Time!"
            />
        </>
    )
}

export default TableTeams