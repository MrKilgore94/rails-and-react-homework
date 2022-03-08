import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const Home = ()=>{
    const {dataDemo, setDataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>Home Page</h1>
            
        </div>
    )
}

export default Home