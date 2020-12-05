import Table from "../../components/table"
import { useSelector } from "react-redux"

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
        dataIndex: "neededScore"
    }
]

const TableList = () => {
    const tableList = useSelector((store) => store.tables)

    return (
        <Table
            list={tableList}
            titles={tableTitles}
            buttonText="Criar nova tabela"
            goToPage="/table"/>
    )
}

export default TableList