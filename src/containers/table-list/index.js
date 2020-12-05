import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import FormCreate from "../../components/form-create"
import Table from "../../components/table"

import { createNewTable } from "../../redux/modules/tables/actions"

const tableTitles = [
    {
        title: "Nome",
        dataIndex: "name",
    },
    {
        title: "Premiação",
        dataIndex: "award",
    },
    {
        title: "Pontuação necessária para vitória",
        dataIndex: "tableScore"
    }
]

const TableList = () => {
    const dispatch = useDispatch()

    const tableList = useSelector((store) => store.tables)

    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})
    
    const inputs = [
        {
            type: "text",
            name: "name",
            placeholder: "Nome da tabela",
            validate: (value) => {
                setData({ ...data, name: value })
                if (!value) return "Por favor informe um nome para a nova tabela!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 5)"
            }
        },
        {
            type: "textarea",
            name: "award",
            placeholder: "Premiação",
            validate: (value) => {
                setData({ ...data, award: value })
                if (!value) return "Por favor informe a premiação!"
                if (value.length < 3)
                    return "Favor informar uma premiação adequada! (quantidade minima de caracteres: 3)"
            }
        },
        {
            type: "number",
            name: "tableScore",
            placeholder: "Pontuação para vitória",
            validate: (value) => {
                setData({ ...data, tableScore: value })
                if (!value) return "Por favor informe a pontuação!"
            }
        },
        {
            type: "textarea",
            name: "description",
            placeholder: "Descreva como é feito a pontuação",
            validate: (value) => {
                setData({ ...data, description: value })
                if (!value) return "Por favor informe uma descrição!"
                if (value.length < 10)
                    return "Favor informar uma descrição adequada! (quantidade minima de caracteres: 10)"
            }
        }
    ]

    const onSubmit = (values) => {
        dispatch(createNewTable(values))
        setData({})
        setShowModal(false)
    }

    return (
        <>
            <Table
                list={tableList}
                titles={tableTitles}
                onNewRow={() => setShowModal(true)}
                buttonText="Criar nova tabela"
                goToPage="/table"
                />
            <FormCreate
                inputs={inputs}
                data={{ data, setData }}
                onSubmit={onSubmit}
                show={{ showModal, setShowModal }}
                title="Criar uma nova Tabela!"
            />
        </>
    )
}

export default TableList