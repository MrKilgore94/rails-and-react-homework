import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const About = ()=>{
    const {dataDemo, setDataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>About Page</h1>
            
        </div>
    )
}

export default About