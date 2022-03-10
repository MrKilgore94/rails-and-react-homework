import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const Home = ()=>{
    const {dataDemo, setDataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>Home Page</h1>
            <h2>This is a List of guns</h2>
        </div>
    )
}

export default Home