import Table from "../../components/table"
import { useSelector } from "react-redux"

// Baseado no <Title /> do antd
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
        dataIndex: "score"
    }
]

const Home = () => {
    const tableList = useSelector((store) => store.tables)
    return (
        <>
            <h1>Tabelas:</h1>
            <Table
                list={tableList}
                titles={tableTitles}
                buttonText="Criar nova tabela" />
            <h1>Times:</h1>
            <Table
                list={[]}
                titles={[]}
                buttonText="Criar novo time" />
        </>
    )
}

export default Home