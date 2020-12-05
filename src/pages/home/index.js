import TableList from "../../containers/table-list"
import TableTeams from "../../containers/table-teams"

const Home = () => {
    return (
        <>
            <h1>Tabelas:</h1>
            <TableList />
            <h1>Times:</h1>
            <TableTeams />
        </>
    )
}

export default Home