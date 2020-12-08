import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import Table from "../../components/table"
import Cell from "../../components/table-components/cell"
import Row from "../../components/table-components/row"


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
        dataIndex: "table_score"
    }
]

const TableList = ({ children, onNewRow }) => {
    const history = useHistory()
    const tables = useSelector((state) => state.tables)

    return (
        <>
            <Table onNewRow={onNewRow} buttonText="Criar nova tabela" goToPage="/table">
                <Row.Title>
                    {tableTitles
                        .map((currTitle, index) =>
                            <Cell key={index}>{currTitle.title}</Cell>)}
                </Row.Title>

                {tables
                    .map((currItem, itemIndex) => (
                        <Row key={itemIndex} handleRowClick={() => history.push(`/table/${currItem.id}`)}>
                            {tableTitles.map((currTitle, index) => (
                                <Cell key={index}>
                                    {currItem[currTitle.dataIndex]}
                                </Cell>
                            ))}
                        </Row>
                    ))}
            </Table>
            {children}
        </>
    )
}

export default TableList